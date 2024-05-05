<template>
    <div class="form auth-boxed">
        <div class="form-container outer">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">
                            <h1 class="">SIGN IN</h1>
                            <p class="">Log in to your account to continue.</p>

                            <form class="text-start" @submit.prevent="login">
                                <div v-if="errorMessage" class="alert alert-danger border-0 mb-4" role="alert">
                                    <strong>Error!</strong> {{ errorMessage }}
                                </div>
                                <div v-if="sucessMessage" class="alert alert-success border-0 mb-4" role="alert">
                                    <strong>Success!</strong> {{ sucessMessage }}
                                </div>
                                <div class="form">
                                    <div id="username-field" class="field-wrapper input">
                                        <label for="username">USERNAME</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <input type="text" v-model="username_or_email" class="form-control"
                                            placeholder="e.g John_Doe" />
                                    </div>

                                    <div id="password-field" class="field-wrapper input mb-2">
                                        <div class="d-flex justify-content-between">
                                            <label for="password">PASSWORD</label>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <input :type="pwd_type" v-model="password" class="form-control"
                                            placeholder="Password" />
                                        <svg @click="set_pwd_type" xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            id="toggle-password" class="feather feather-eye">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper">
                                            <button v-if="!loading" type="submit" class="btn btn-primary">Log
                                                In</button>
                                            <button v-else type="button" class="btn btn-danger btn-lg mb-3 me-3"
                                                disabled><span
                                                    class="spinner-border text-white me-2 align-self-center loader-sm">Loading...</span>
                                                Loading</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';
import '@/assets/sass/authentication/auth-boxed.scss';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Login' });

const router = useRouter();
const username_or_email = ref('');
const password = ref('');
const errorMessage = ref('');
const sucessMessage = ref('');
const pwd_type = ref('password');

    const set_pwd_type = () => {
        if (pwd_type.value === 'password') {
            pwd_type.value = 'text';
        } else {
            pwd_type.value = 'password';
        }
    };
    const loading = ref(false);

const login = async () => {
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
    }

        try {
            loading.value = true;
            const response = await axios.post(`${config.baseAPIURL}login`, {
                username_or_email: username_or_email.value,
                password: password.value
            });

            const token = response.data.token;

            if (token) {
                errorMessage.value = '';
                sucessMessage.value = ' Redirecting...';

                const response = await axios.get(`${config.baseAPIURL}setting`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const setting = response.data.data;
                const logo = setting.company_logo;
                localStorage.setItem('logo', JSON.stringify(logo));
                localStorage.setItem('setting', JSON.stringify(setting));

                localStorage.setItem('token', token);
                loading.value = false;
                window.location.href = '/agreements';
                //router.push('/agreements');
            }
            else {
                errorMessage.value = 'Error hub administrator';
            }
        } catch (error) {
            loading.value = false;
            errorMessage.value = error.response.data.message;
        }
    };
</script>
