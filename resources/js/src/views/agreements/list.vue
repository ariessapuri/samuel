<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Agreement</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>List</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div v-if="add_agreement" class="row pb-4">
                    <div class="col-12">
                        <router-link to="/agreements/add" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-plus-circle">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            <span class="ms-2">Add Agreement</span>
                        </router-link>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div v-if="successMessage" class="alert alert-light-primary alert-dismissible border-0 mb-4">{{
                        successMessage
                        }}</div>
                    <div v-if="errorMessage" class="alert alert-danger alert-dismissible border-0 mb-4">{{
                        errorMessage
                        }}</div>
                    <div class="custom-table">
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="actions text-center">
                                    <a href="javascript:;" v-if="print_agreement" @click="print_row(props.row)"
                                        class="edit pe-1" data-bs-toggle="tooltip" title="Print"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 6 2 18 2 18 9" />
                                            <path
                                                d="M6 18H4a2 2 0 01-2-2V11a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                                            <rect x="6" y="14" width="12" height="8" />
                                        </svg>
                                    </a>
                                    <a href="javascript:;" v-if="edit_agreement" class="edit pe-1"
                                        data-bs-toggle="tooltip" title="Edit" @click="edit_row(props.row)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-check-circle text-primary">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" v-else class="edit pe-1" data-bs-toggle="tooltip"
                                        title="View" @click="edit_row(props.row)">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" v-if="delete_agreement" class="cancel"
                                        data-bs-toggle="tooltip" title="Delete" @click="delete_row(props.row)">
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
import '@/assets/sass/pages/error/style-400.scss';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';

useMeta({ title: 'Agreement - List' });

const successMessage = ref('');
const failedMessage = ref('');
const router = useRouter();
const isPemissionOK = ref(true);

const columns = ref(['doc_no', 'type', 'client', 'attorney', 'value', 'period', 'start_date', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { actions: 'actions text-center', value: 'text-right' },
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

const token = localStorage.getItem('token');
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

const add_agreement = ref(false);
const edit_agreement = ref(false);
const print_agreement = ref(false);
const delete_agreement = ref(false);

onMounted(async () => {
    add_agreement.value = await checkSinglePermission('addAgreement');
    edit_agreement.value = await checkSinglePermission('editAgreement');
    print_agreement.value = await checkSinglePermission('printAgreement');
    delete_agreement.value = await checkSinglePermission('deleteAgreement');

    await bind_data();
});

const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
};

const bind_data = async () => {
    try {
        const response = await axios.get(`${config.baseAPIURL}agreement`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.data.status === false) {
            isPemissionOK.value = false;
        }
        else {
            response.data.forEach((item) => {
                const parse_attorney = JSON.parse(item.attorney);
                item.attorney = parse_attorney.name;
                item.start_date = formatDate(item.start_investment_date);
                item.value = formatNumber(item.investment_value);
                item.period = item.investment_period + " months";
                item.client = item.client.name;
            });
            items.value = response.data;
        }
    } catch (error) {
        if (error.response.status == 500) {
            window.location.href = '/error403';
        }
        else {
            window.location.href = '/error404';
        }
    }
};
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const delete_row = (item) => {
    if (confirm('Are you sure want to delete selected row ?')) {
        const token = 'Bearer ' + localStorage.getItem('token');

        axios.delete(`${config.baseAPIURL}agreement/delete/${item.id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                items.value = items.value.filter((d) => d.id != item.id);
                successMessage.value = response.data.message;
            })
            .catch(error => {
                console.error('Error deleting item:', error);
                failedMessage.value = 'Failed to delete';
            });
    }
};
const edit_row = (row) => {
    router.push({ name: 'agreementsEdit', params: { agreementId: row.id } });
};

const print_row = (row) => {
    const pdfUrl = `${config.baseAPIURL}generatepdf/${row.id}`;

    window.open(pdfUrl, '_blank');
};
</script>
<style>
.text-right {
    text-align: right;
}
</style>
