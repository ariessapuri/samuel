<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Stocklist</a></li>
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
                                    <span class="badge-title badge badge-dark badge-classic">add stocklist</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div v-if="successMessage"
                                        class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                                        successMessage
                                        }}</div>
                                    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage
                                        }}</div>
                                    <div class="panel-body simple-tab tabs">
                                        <ul class="nav nav-tabs mb-3 mt-3" id="simpletab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="justify-pills-single-tab"
                                                    data-bs-toggle="pill" href="#justify-pills-single" role="tab"
                                                    aria-controls="justify-pills-single" aria-selected="true">
                                                    Single</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="justify-pills-bulk-tab" data-bs-toggle="pill"
                                                    href="#justify-pills-bulk" role="tab"
                                                    aria-controls="justify-pills-bulk" aria-selected="false">Bulk
                                                    Upload</a>
                                            </li>
                                        </ul>

                                        <div class="tab-content" id="justify-pills-tabContent">
                                            <div class="tab-pane fade show active" id="justify-pills-single"
                                                role="tabpanel" aria-labelledby="justify-pills-single-tab">
                                                <form @submit.prevent="handleSubmitSingle">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputCode">Code</label>
                                                            <input type="text" class="form-control text-uppercase"
                                                                id="name" v-model="code" placeholder="e.g BBCA"
                                                                required="required" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="inputName">Name</label>
                                                            <input type="text" class="form-control text-uppercase"
                                                                id="inputName" v-model="name"
                                                                placeholder="e.g. BANK CENTRAL ASIA"
                                                                required="required" />
                                                        </div>
                                                    </div>
                                                    <button v-if="!loading" type="submit"
                                                        class="btn btn-primary">Save</button>
                                                    <button v-else type="button" class="btn btn-danger btn-lg mb-3 me-3"
                                                        disabled><span
                                                            class="spinner-border text-white me-2 align-self-center loader-sm">Loading...</span>
                                                        Loading</button>
                                                </form>
                                            </div>
                                            <div class="tab-pane fade" id="justify-pills-bulk" role="tabpanel"
                                                aria-labelledby="justify-pills-bulk-tab">
                                                <form @submit.prevent="handleSubmitBulk">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputCode">File (xlsx or csv only)</label>
                                                            <input type="file" class="form-control" ref="fileInput"
                                                                accept=".xlsx, .csv" required />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="inputCode">Example</label>
                                                            <div><img src="@/assets/images/example.png" alt="Example" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button v-if="!loading" type="submit"
                                                        class="btn btn-primary">Upload</button>
                                                    <button v-else type="button" class="btn btn-danger btn-lg mb-3 me-3"
                                                        disabled><span
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
import { ref } from 'vue';
import { useMeta } from '@/composables/use-meta';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';
import { isLoading } from '@/router/loading_router';
const loading = ref(false);

axios.defaults.headers.common['Accept'] = 'application/json';

const errorMessage = ref('');
const successMessage = ref('');
const code = ref('');
const name = ref('');
const fileInput = ref(null);

const router = useRouter();

const token = localStorage.getItem('token');

useMeta({ title: 'Stocklist - Add' });

async function handleSubmitBulk() {
    const formData = new FormData();
    formData.append('file', fileInput.value.files[0]);

    try {
        loading.value = true;
        const response = await axios.post(`${config.baseAPIURL}stocklist/uploadBulk`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        successMessage.value = response.data.message;
        fileInput = null;
        loading.value = false;
    } catch (error) {
        loading.value = false;
        errorMessage.value = error.response.data.message;
    }
};

async function handleSubmitSingle() {

    const formData = {
        code: code.value,
        name: name.value,
    };

    try {
        loading.value = true;
        const response = await axios.post(`${config.baseAPIURL}stocklist/store`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const stocklistId = response.data.id;

        router.push({ name: 'stocklistEdit', params: { id: stocklistId }, query: { successMessage: 'Stocklist created successfully' } });

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
