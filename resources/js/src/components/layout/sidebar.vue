<template>
    <!--  BEGIN SIDEBAR  -->
    <div class="sidebar-wrapper sidebar-theme">
        <nav ref="menu" id="sidebar">
            <div class="shadow-bottom"></div>

            <perfect-scrollbar class="list-unstyled menu-categories" tag="ul"
                :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 300, suppressScrollX: true }">
                <!--<li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#dashboard"
                        aria-controls="dashboard" aria-expanded="false">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span>{{ $t('dashboard') }}</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="dashboard" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/" @click="toggleMobileMenu">
                                {{ $t('sales') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/index2" @click="toggleMobileMenu">
                                {{ $t('analytics') }}
                            </router-link>
                        </li>
                    </ul>
                </li>-->

                <li class="menu" v-if="hasListAgreementPermission() || hasAddAgreementPermission()">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#agreements"
                        aria-controls="agreements" aria-expanded="false">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-clipboard">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2">
                                </path>
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                            </svg>
                            <span>{{ $t('Agreements') }}</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="agreements" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li v-if="hasListAgreementPermission()">
                            <router-link to="/agreements" @click="toggleMobileMenu">List</router-link>
                        </li>
                        <li v-if="hasAddAgreementPermission()">
                            <router-link to="/agreements/add" @click="toggleMobileMenu">Add New</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu" v-if="hasListClientPermission() || hasAddClientPermission()">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#clients"
                        aria-controls="clients" aria-expanded="false">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-layout">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="9" y1="21" x2="9" y2="9"></line>
                            </svg>
                            <span>{{ $t('Clients') }}</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="clients" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li v-if="hasListClientPermission()">
                            <router-link to="/clients" @click="toggleMobileMenu">List</router-link>
                        </li>
                        <li v-if="hasAddClientPermission()">
                            <router-link to="/clients/add" @click="toggleMobileMenu">Add New</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu" v-if="hasListUserPermission() || hasAddUserPermission()">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#users" aria-controls="users"
                        aria-expanded="false">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-users">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span>{{ $t('users') }}</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="users" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li v-if="hasListUserPermission()">
                            <router-link to="/users" @click="toggleMobileMenu">List</router-link>
                        </li>
                        <li v-if="hasAddUserPermission()">
                            <router-link to="/users/add" @click="toggleMobileMenu">Add New</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu" v-if="hasRolePagePermission() || hasPermissionPagePermission()">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#access" aria-controls="access"
                        aria-expanded="false">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-lock">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span>{{ $t('Access') }}</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="access" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li v-if="hasRolePagePermission()">
                            <router-link to="/access/role" @click="toggleMobileMenu">Role</router-link>
                        </li>
                        <li v-if="hasPermissionPagePermission()">
                            <router-link to="/access/permission" @click="toggleMobileMenu">Permission</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu" v-if="hasGeneralSettingPagePermission() || hasAttorneyPagePermission()">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#setting"
                        aria-controls="setting" aria-expanded="false">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-airplay">
                                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1">
                                </path>
                                <polygon points="12 15 17 21 7 21 12 15"></polygon>
                            </svg>
                            <span>{{ $t('Setting') }}</span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="setting" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li v-if="hasGeneralSettingPagePermission()">
                            <router-link to="/setting" @click="toggleMobileMenu">General</router-link>
                        </li>
                        <li v-if="hasAttorneyPagePermission()">
                            <router-link to="/setting/attorney" @click="toggleMobileMenu">Attorney</router-link>
                        </li>
                    </ul>
                </li>
            </perfect-scrollbar>
        </nav>
    </div>
    <!--  END SIDEBAR  -->
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import config from '@/config/config.js';
    const store = useStore();

    const menu_collapse = ref('dashboard');
const token = localStorage.getItem('token');
const allPermissions = ref([]);

const fetchPermissions = async () => {
    return axios.get(`${config.baseAPIURL}access/getAllPermissionsForCurrentUser`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }).then(response => {
        allPermissions.value = response.data.data;
    }).catch(error => {
        console.error("Error checking permission:", error);
        return false;
    });
};

const hasListAgreementPermission = () => {
    return allPermissions.value.some(permission => permission.name === 'listAgreement');
};

const hasAddAgreementPermission = () => {
    return allPermissions.value.some(permission => permission.name === 'addAgreement');
};

const hasListClientPermission = () => {
    return allPermissions.value.some(permission => permission.name === 'listClient');
};

const hasAddClientPermission = () => {
    return allPermissions.value.some(permission => permission.name === 'addClient');
};

const hasListUserPermission = () => {
    return allPermissions.value.some(permission => permission.name === 'listUser');
};

const hasAddUserPermission = () => {
    return allPermissions.value.some(permission => permission.name === 'addUser');
};

const hasRolePagePermission = () => {
    return allPermissions.value.some(permission => permission.name === 'rolePage');
};

const hasPermissionPagePermission = () => {
    return allPermissions.value.some(permission => permission.name === 'permissionPage');
};

const hasGeneralSettingPagePermission = () => {
    return allPermissions.value.some(permission => permission.name === 'GeneralSettingPage');
};

const hasAttorneyPagePermission = () => {
    return allPermissions.value.some(permission => permission.name === 'attorneyPage');
};


onMounted(async () => {
    await fetchPermissions();
});


    onMounted(() => {
        const selector = document.querySelector('#sidebar a[href="' + window.location.pathname + '"]');
        if (selector) {
            const ul = selector.closest('ul.collapse');
            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.dropdown-toggle');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            } else {
                selector.click();
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 991) {
            store.commit('toggleSideBar', !store.state.is_show_sidebar);
        }
    };
</script>
