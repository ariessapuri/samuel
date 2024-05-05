<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Users</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Edit</span></li>
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
                <div class="row">
                    <div class="col-6 text-start">
                        <small>{{ created_by ? 'created by: ' + created_by + ' | ' + created_at : '' }}</small>
                    </div>
                    <div class="col-6 text-end">
                        <small>{{ updated_by ? 'last updated by: ' + updated_by + ' | ' + updated_at : '' }}</small>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">edit user</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form @submit.prevent="handleSubmit">
                                    <div v-if="$route.query.successMessage"
                                        class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                        $route.query.successMessage }}</div>
                                    <div v-if="successMessage"
                                        class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                        successMessage }}</div>
                                    <div v-if="errorMessage" class="alert alert-danger alert-dismissible border-0 mb-4">
                                        {{
                                        errorMessage }}</div>
                                    <input type="hidden" v-model="id">
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
                                                v-model="username" placeholder="Username" required="required"
                                                readonly />
                                            <small id="sh-text1" class="block text-muted">Can't be changed</small>
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
                                    <button v-if="!loading" type="submit" class="btn btn-primary">Update</button>
                                    <button v-else type="button" class="btn btn-danger btn-lg mb-3 me-3" disabled><span
                                            class="spinner-border text-white me-2 align-self-center loader-sm">Loading...</span>
                                        Loading</button>
                                </form>
                                <form @submit.prevent="handleUpdatePassword">
                                    <div class="row mt-4">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12 ps-0">
                                                    <h4 class="text-decoration-underline">Update Password</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="successMessagep"
                                        class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                        successMessagep }}</div>
                                    <div v-if="errorMessagep"
                                        class="alert alert-danger alert-dismissible border-0 mb-4">{{errorMessagep }}
                                    </div>
                                    <div class="row">
                                        <input type="hidden" v-model="id">
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
                                    <button v-if="!loadingp" type="submit" class="btn btn-primary">Update
                                        Password</button>
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
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Users</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>View</span></li>
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
                <div class="row">
                    <div class="col-6 text-start">
                        <small>{{ created_by ? 'created by: ' + created_by + ' | ' + created_at : '' }}</small>
                    </div>
                    <div class="col-6 text-end">
                        <small>{{ updated_by ? 'last updated by: ' + updated_by + ' | ' + updated_at : '' }}</small>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">view user</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form @submit.prevent="handleSubmit">
                                    <div v-if="$route.query.successMessage"
                                        class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                        $route.query.successMessage }}</div>
                                    <div v-if="successMessage"
                                        class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                        successMessage }}</div>
                                    <div v-if="errorMessage" class="alert alert-danger alert-dismissible border-0 mb-4">
                                        {{
                                        errorMessage }}</div>
                                    <input type="hidden" v-model="id">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputName">Name</label>
                                            <input type="text" class="form-control" id="name" v-model="name"
                                                placeholder="Name" required="required" readonly />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" v-model="email"
                                                placeholder="Email" required="required" readonly />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputUsername">Username</label>
                                            <input type="text" class="form-control" id="inputUsername"
                                                v-model="username" placeholder="Username" required="required"
                                                readonly />
                                            <small id="sh-text1" class="block text-muted">Can't be changed</small>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputRole">Role</label>
                                            <select id="role" class="form-select" v-model="role" required="required">
                                                <option value="" disabled readonly>Select role</option>
                                                <option v-for="item in allRoles" :key="item.id" :value="item.name"
                                                    :selected="item.name === role">{{ item.name }}</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPosition">Position</label>
                                            <input type="text" class="form-control" v-model="position"
                                                id="inputposition" placeholder="Position" readonly />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMeta } from '@/composables/use-meta';
import config from '@/config/config.js';

axios.defaults.headers.common['Accept'] = 'application/json';

const loading = ref(false);
const loadingp = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const errorMessagep = ref('');
const successMessagep = ref('');
const id = ref('');
const name = ref('');
const email = ref('');
const username = ref('');
const role = ref('');
const position = ref('');
const password = ref('');
const confirmPassword = ref('');
const allRoles = ref([]);
const updated_by = ref('');
const updated_at = ref('');
const created_by = ref('');
const created_at = ref('');

const router = useRouter();

useMeta({ title: 'Users - Edit' });

const token = localStorage.getItem('token');

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
    isPemissionOK.value = await checkSinglePermission('editUser');

    try {
        const response_roles = await axios.get(`${config.baseAPIURL}access/allroles`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        allRoles.value = response_roles.data;

        const userId = router.currentRoute.value.params.userId;
        const response = await axios.get(`${config.baseAPIURL}users/show/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const userData = response.data;

        id.value = userData.id;
        name.value = userData.name;
        email.value = userData.email;
        username.value = userData.username;
        role.value = userData.role[0];
        position.value = userData.position;
        updated_by.value = userData.updated_by;
        updated_at.value = userData.updated_at_formatted;
        created_by.value = userData.created_by;
        created_at.value = userData.created_at_formatted;

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage.value = error.response.data.message;
        } else {
            console.error(error);
        }
    }
});

async function handleSubmit() {
    const formData = {
        name: name.value,
        email: email.value,
        username: username.value,
        role: role.value,
        position: position.value
    };

    try {
        loading.value = true;
        const response = await axios.put(`http://localhost:8000/api/users/update/${id.value}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        successMessage.value = response.data.message;
        errorMessage.value = '';
        loading.value = false;
    } catch (error) {
        loading.value = false;
        successMessage.value = '';
        errorMessage.value = error.response.data.message;
    }
}

async function handleUpdatePassword() {
    if (password.value !== confirmPassword.value) {
        successMessagep.value = '';
        errorMessagep.value = "Password and confirm password do not match.";
        return;
    }

    const formData = {
        password: password.value,
        password_confirmation: confirmPassword.value,
    };

    try {
        loadingp.value = true;
        const response = await axios.put(`http://localhost:8000/api/users/updatePassword/${id.value}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        successMessagep.value = response.data.message;
        errorMessagep.value = '';
        loadingp.value = false;
    } catch (error) {
        loadingp.value = false;
        successMessagep.value = '';
        errorMessagep.value = error.response.data.message;
    }
}
router.afterEach(() => {
    window.scrollTo(0, 0);
});
</script>

<style>
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
