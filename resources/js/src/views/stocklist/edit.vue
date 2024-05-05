<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Stocklist</a></li>
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
                            Back to Stocklist list
                        </a>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">edit stocklist</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div v-if="$route.query.successMessage"
                                    class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                    $route.query.successMessage }}</div>
                                <div v-if="successMessage"
                                    class="alert alert-light-primary alert-dismissible border-0 mb-4">{{ successMessage
                                    }}</div>
                                <div v-if="errorMessage" class="alert alert-danger alert-dismissible border-0 mb-4">{{
                                    errorMessage
                                    }}</div>
                                <div class="row">
                                    <form @submit.prevent="handleSubmit">
                                        <div class="row">
                                            <input type="hidden" v-model="id">
                                            <div class="form-group col-md-6">
                                                <label for="inputCode">Code</label>
                                                <input type="text" class="form-control text-uppercase" id="name"
                                                    v-model="code" placeholder="e.g BBCA" required="required" disabled />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputName">Name</label>
                                                <input type="text" class="form-control text-uppercase" id="inputName"
                                                    v-model="name" placeholder="e.g. BANK CENTRAL ASIA"
                                                    required="required" />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary mt-3">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isLoading" class="loading-overlay">
        <div class="spinner-border text-success align-self-center">Loading...</div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useMeta } from '@/composables/use-meta';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';
const loading = ref(false);

axios.defaults.headers.common['Accept'] = 'application/json';

const errorMessage = ref('');
const successMessage = ref('');
const id = ref('');
const code = ref('');
const name = ref('');

const router = useRouter();

const token = localStorage.getItem('token');

useMeta({ title: 'Stocklist - Edit' });

async function handleSubmit() {

    const formData = {
        code: code.value,
        name: name.value,
    };

    try {
        loading.value = true;
        const response = await axios.put(`${config.baseAPIURL}stocklist/update/${id.value}`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        successMessage.value = response.data.message;
        loading.value = false;
    } catch (error) {
        loading.value = false;
        errorMessage.value = error.response.data.message;
    }
}

onMounted(async () => {

    try {
        const stocklistId = router.currentRoute.value.params.id;
        const response = await axios.get(`${config.baseAPIURL}stocklist/edit/${stocklistId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const stocklistData = response.data;

        id.value = stocklistData.id;
        code.value = stocklistData.code;
        name.value = stocklistData.name;

    } catch (error) {
        errorMessage.value = "Failed to load data";
    }

});
</script>

<style>
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
