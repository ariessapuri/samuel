<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Users</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Add</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="row pb-4">
                    <div class="col-12">
                        <router-link to="/users" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block ml-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Back to users list
                        </router-link>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">add user</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form @submit.prevent="handleSubmit">
                                    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputName">Name</label>
                                            <input type="text" class="form-control" id="name" v-model="name"
                                                placeholder="Name" required="required" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" v-model="email"
                                                placeholder="Email" required="required" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputUsername">Username</label>
                                            <input type="text" class="form-control" id="inputUsername"
                                                v-model="username" placeholder="Username" required="required" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputRole">Role</label>
                                            <select id="role" class="form-select" v-model="role" required="required">
                                                <option value="" disabled>Select role</option>
                                                <option v-for="item in allRoles" :key="item.id" :value="item.name"
                                                    :selected="item.name === role">{{ item.name }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPosition">Position</label>
                                            <input type="text" class="form-control" v-model="position"
                                                id="inputposition" placeholder="Position" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Password</label>
                                            <input type="password" class="form-control" v-model="password"
                                                id="inputPassword4" placeholder="Password" required="required" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword5">Confirm Password</label>
                                            <input type="password" class="form-control" v-model="confirmPassword"
                                                id="inputPassword5" placeholder="Confirm Password"
                                                required="required" />
                                        </div>
                                    </div>
                                    <button v-if="!loading" type="submit" class="btn btn-primary">Create</button>
                                    <button v-else type="button" class="btn btn-danger btn-lg mb-3 me-3" disabled><span
                                            class="spinner-border text-white me-2 align-self-center loader-sm">Loading...</span>
                                        Loading</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="layout-px-spacing">
        <div class="error404 text-center">
            <div class="container-fluid error-content">
                <div class="">
                    <h1 class="error-number">403</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text mb-4 mt-1">You have no access to see this page</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useMeta } from '@/composables/use-meta';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';

axios.defaults.headers.common['Accept'] = 'application/json';

const loading = ref(false);
const errorMessage = ref('');
const name = ref('');
const email = ref('');
const username = ref('');
const role = ref('');
const allRoles = ref([]);
const position = ref('');
const password = ref('');
const confirmPassword = ref('');

const router = useRouter();
const token = localStorage.getItem('token');
useMeta({ title: 'Users - Add' });

const isPemissionOK = ref(true);
const checkSinglePermission = (permissionName) => {
    return axios.get(`${config.baseAPIURL}access/checkSinglePermission/${permissionName}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then(response => {
        return response.data.status;
    }).catch(error => {
        console.error("Error checking permission:", error);
        return false;
    });
};

onMounted(async () => {
    isPemissionOK.value = await checkSinglePermission('addUser');

    const response_roles = await axios.get(`${config.baseAPIURL}access/allroles`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    allRoles.value = response_roles.data;
});

async function handleSubmit() {
    // Form validation logic
    if (password.value !== confirmPassword.value) {
        errorMessage.value = "Password and confirm password do not match.";
        return;
    }

    // Form data
    const formData = {
        name: name.value,
        email: email.value,
        username: username.value,
        role: role.value,
        position: position.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
    };

    try {
        loading.value = true;
        const response = await axios.post(`${config.baseAPIURL}users/store`, formData, {
            headers: {
                'Authorization': `Bearer ${token}` // Add token to the Authorization header
            }
        });

        const userId = response.data.user_id;
        loading.value = false;
        router.push({ name: 'usersEdit', params: { userId: userId }, query: { successMessage: 'User created successfully' } });

    } catch (error) {
        loading.value = false;
        errorMessage.value = error.response.data.message;
    }
}
</script>
<style>
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
