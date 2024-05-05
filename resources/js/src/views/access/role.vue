<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Access</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Role</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <span class="badge-title badge badge-dark badge-classic">Role</span>
                        </div>
                    </div>

                    <div v-if="successMessage" class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                        successMessage }}</div>
                    <div v-if="errorMessage" class="alert alert-danger alert-dismissible border-0 mb-4">
                        {{ errorMessage }}
                    </div>
                    <div class="custom-table">
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="actions text-center">
                                    <a href="javascript:;" data-bs-toggle="tooltip" title="Delete" class="cancel"
                                        @click="delete_row(props.row)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-x-circle table-cancel">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </a>
                                </div>
                            </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel br-6 p-0">
            <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <span class="badge-title badge badge-dark badge-classic">add role</span>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="inputName">New Role</label>
                                    <input type="text" class="form-control" id="name" v-model="new_role" placeholder=""
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
import { onMounted, ref } from 'vue';
import { useMeta } from '@/composables/use-meta';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';

useMeta({ title: 'Access - Role' });

const isPemissionOK = ref(true);
const new_role = ref('');
const loading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const token = localStorage.getItem('token');

const router = useRouter();
const columns = ref(['name', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { actions: 'actions text-center' },
    sortable: [],
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    resizableColumns: false,
});

async function handleSubmit() {
    const formData = {
        new_role: new_role.value
    };

    try {
        loading.value = true;
        console.log(`${config.baseAPIURL}access/addRole`);
        const response = await axios.post(`${config.baseAPIURL}access/addRole`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        items.value.push(response.data.role);

        successMessage.value = response.data.message;
        errorMessage.value = '';
        loading.value = false;
    } catch (error) {
        loading.value = false;
        successMessage.value = '';
        errorMessage.value = error.response.data.message;
    }
}

const initTooltip = () => {
    setTimeout(() => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
};

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
    await bind_data();
    initTooltip();

    isPemissionOK.value = await checkSinglePermission('rolePage');
});

const bind_data = async () => {
    try {

        const response = await axios.get(`${config.baseAPIURL}access/allroles`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        items.value = response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const delete_row = async (item) => {
    if (confirm('Are you sure want to delete selected row ?')) {
        try {
            await axios.delete(`${config.baseAPIURL}access/deleteRole/${item.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            items.value = items.value.filter((d) => d.id != item.id);
            successMessage.value = "Role deleted successfully";
            errorMessage.value = '';
        } catch (error) {
            errorMessage.value = 'Failed to remove Role';
            successMessage.value = '';
            console.error('Error deleting role:', error);
        }
    }
};
</script>
<style>
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
