<template>
    <div v-if="isPemissionOK" class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Access</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Permission</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                        <div class="statbox panel box box-shadow">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <span class="badge-title badge badge-dark badge-classic">Permission</span>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div id="toggleAccordion" class="accordion">
                                    <div class="card" v-for="(role, index) in roles" :key="role.id">
                                        <header class="card-header" role="tab" :id="'heading_' + index">
                                            <section class="mb-0 mt-0">
                                                <div class="collapsed" role="menu" :data-bs-toggle="'collapse'"
                                                    :data-bs-target="'#collapse_' + index" aria-expanded="false"
                                                    :aria-controls="'collapse_' + index">
                                                    <span class="h6"><strong>{{ role.name }}</strong></span>
                                                    <div class="icons">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-chevron-down">
                                                            <polyline points="6 9 12 15 18 9"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </section>
                                        </header>
                                        <div :id="'collapse_' + index" class="collapse"
                                            :aria-labelledby="'heading_' + index" data-bs-parent="#toggleAccordion">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div v-for="permission in permissions" :key="permission.id"
                                                        class="col-md-4">
                                                        <label>
                                                            <input type="checkbox"
                                                                :checked="isPermissionChecked(role, permission)"
                                                                @change="togglePermission(role, permission)"
                                                                :disabled="role.name === 'superadmin'">
                                                            {{ permission.name }}
                                                        </label>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import config from '@/config/config.js';
import { useMeta } from '@/composables/use-meta';
import '@/assets/sass/components/tabs-accordian/custom-accordions.scss';
import highlight from '@/components/plugins/highlight.vue';

const roles = ref([]);
const permissions = ref([]);
const isPemissionOK = ref(true);

useMeta({ title: 'Access - Permission' });

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
    await fetchData();

    isPemissionOK.value = await checkSinglePermission('permissionPage');
});

const fetchData = async () => {
    try {
        const token = localStorage.getItem('token');

        const rolesResponse = await axios.get(`${config.baseAPIURL}access/allroles`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        roles.value = rolesResponse.data;

        const permissionsResponse = await axios.get(`${config.baseAPIURL}access/allPermissions`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        permissions.value = permissionsResponse.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const isPermissionChecked = (role, permission) => {
    return role.permissions.some(p => p.id === permission.id);
};

const togglePermission = async (role, permission) => {
    try {
        const token = localStorage.getItem('token');
        const roleIndex = roles.value.findIndex(r => r.id === role.id);
        const permissionIndex = roles.value[roleIndex].permissions.findIndex(p => p.id === permission.id);

        if (permissionIndex === -1) {
            roles.value[roleIndex].permissions.push(permission);
        } else {
            roles.value[roleIndex].permissions.splice(permissionIndex, 1);
        }

        await axios.put(`${config.baseAPIURL}access/updateRolePermissions/${role.id}`, {
            permissions: roles.value[roleIndex].permissions.map(p => p.id),
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

    } catch (error) {
        console.error('Error toggling permission:', error);
    }
};
</script>
<style>
.badge-title {
    font-size: 14px;
    text-transform: uppercase;
}
</style>
