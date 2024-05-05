<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Users</a></li>
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
                        <a href="/users/add" class="btn btn-primary">Add New <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg></a>
                    </div>
                </div>
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="actions text-center">
                                    <a href="javascript:;" class="cancel" @click="delete_row(props.row)">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-x-circle table-cancel"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" class="edit" @click="edit_row(props.row)">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-edit"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 16s-1.5-.5-1.5-1.5V7H14v7.5s0 1-1.5 1.5"></path>
                                            <path d="M19 21v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2"></path>
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

useMeta({ title: 'Users - List' });

const router = useRouter();
const columns = ref(['name', 'username', 'position', 'access', 'actions']);
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

onMounted(async () => {
    await bind_data();
});

const bind_data = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${config.baseAPIURL}users`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response.data); return;
        items.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        router.push({ name: 'login' });
    }
};

const delete_row = (item) => {
    if (confirm('Are you sure want to delete selected row ?')) {
        items.value = items.value.filter((d) => d.id != item.id);
    }
};
</script>
