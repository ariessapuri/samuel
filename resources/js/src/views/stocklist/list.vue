<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Stocklist</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>List</span></li>
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
                        <a href="/stocklist/add" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-plus-circle">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            <span class="ms-2">Add Stocklist</span>
                        </a>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="actions text-center">
                                    <a href="javascript:;" class="edit pe-1" data-bs-toggle="tooltip" title="edit"
                                        @click="edit_row(props.row)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-check-circle text-primary">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </a>

                                    <a href="javascript:;" class="cancel" data-bs-toggle="tooltip" title="delete"
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
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useMeta } from '@/composables/use-meta';
import { useRouter } from 'vue-router';
import config from '@/config/config.js';

useMeta({ title: 'Stocklist - List' });

const router = useRouter();
const columns = ref(['code', 'name', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [10, 20, 50, 100],
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
    sortable: ['code', 'name'],
    sortIcon: {
        base: 'sort-icon-none',
        up: 'sort-icon-asc',
        down: 'sort-icon-desc',
    },
    resizableColumns: false,
});

const initTooltip = () => {
    setTimeout(() => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
};

onMounted(async () => {
    await bind_data();
    initTooltip();
});

const bind_data = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${config.baseAPIURL}stocklist`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        items.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const delete_row = (item) => {
    if (confirm('Are you sure want to delete selected row ?')) {
        items.value = items.value.filter((d) => d.id != item.id);
    }
};
const edit_row = (row) => {
    router.push({ name: 'stocklistEdit', params: { id: row.id } });
};
</script>
