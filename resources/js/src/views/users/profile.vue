<template>
    <div class="layout-px-spacing">
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
                        <a href="/users" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block ml-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Back to users list
                        </a>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">update profile</span>
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
                                        {{ errorMessage }}</div>
                                    <input type="hidden" v-model="id">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputUsername">Username</label>
                                            <input type="text" class="form-control" id="inputUsername"
                                                v-model="username" placeholder="Username" required="required"
                                                readonly />
                                            <small id="sh-text1" class="block text-muted">Can't be changed</small>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" v-model="email"
                                                placeholder="Email" required="required" readonly />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="inputName">Name</label>
                                            <input type="text" class="form-control" id="name" v-model="name"
                                                placeholder="Name" required="required" />
                                        </div>
                                        <div class="form-group col-md-6">
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
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Old Password</label>
                                            <input type="password" class="form-control" v-model="old_password"
                                                id="inputPassword4" placeholder="Old Password" required="required" />
                                        </div>
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
const position = ref('');
const old_password = ref('');
const password = ref('');
const confirmPassword = ref('');

const router = useRouter();

useMeta({ title: 'Profile' });

const token = localStorage.getItem('token');

onMounted(async () => {
    try {
        const response = await axios.get(`${config.baseAPIURL}profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const userData = response.data;

        id.value = userData.id;
        name.value = userData.name;
        email.value = userData.email;
        username.value = userData.username;
        position.value = userData.position;

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
        id: id.value,
        name: name.value,
        position: position.value
    };

    try {
        loading.value = true;
        const response = await axios.put(`${config.baseAPIURL}profile/update`, formData, {
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
        id: id.value,
        old_password: old_password.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
    };

    try {
        loadingp.value = true;
        const response = await axios.put(`${config.baseAPIURL}profile/updatePassword`, formData, {
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
</script>

<style>
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
