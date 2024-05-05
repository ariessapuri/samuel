import { createRouter, createWebHistory, useRouter } from 'vue-router';

import Home from '../views/auth/login_boxed.vue';
import store from '../store';

const routes = [
    //dashboard
    { path: '/', name: 'login', component: Home, meta: { layout: 'auth' } },
    // agreements
    {
        path: '/agreements',
        name: 'agreements',
        component: () => import('../views/agreements/list.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/agreements/add',
        name: 'agreementsAdd',
        component: () => import('../views/agreements/add.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/agreements/:agreementId',
        name: 'agreementsEdit',
        component: () => import('../views/agreements/edit.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    // client
    {
        path: '/clients',
        name: 'clients',
        component: () => import('../views/clients/list.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/clients/add',
        name: 'clientsAdd',
        component: () => import('../views/clients/add.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/clients/:Id',
        name: 'clientsEdit',
        component: () => import('../views/clients/edit.vue'),
        meta: {
            requiresAuth: true
        }
    },
	{
        path: '/error403',
        name: 'error403',
        component: () => import('../views/pages/error403.vue'),
        meta: { layout: 'auth' },
    },
    /*{
        path: '/stocklist',
        name: 'stocklist',
        component: () => import('../views/stocklist/list.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/stocklist/add',
        name: 'stocklistAdd',
        component: () => import('../views/stocklist/add.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/stocklist/:id',
        name: 'stocklistEdit',
        component: () => import('../views/stocklist/edit.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },*/
    //users
    {
        path: '/users',
        name: 'user',
        component: () => import('../views/users/list.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users/add',
        name: 'usersAdd',
        component: () => import('../views/users/add.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users/:userId',
        name: 'usersEdit',
        component: () => import('../views/users/edit.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users/profile',
        name: 'profile',
        component: () => import('../views/users/profile.vue'),
        meta: {
            requiresAuth: true
        }
    },
    // access
    {
        path: '/access/role',
        name: 'accessRole',
        component: () => import('../views/access/role.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/access/permission',
        name: 'accessPermission',
        component: () => import('../views/access/permission.vue'),
        meta: {
            requiresAuth: true
        }
    },
    // setting
    {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/setting/general.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/setting/attorney',
        name: 'attorneySetting',
        component: () => import('../views/setting/attorney.vue'),
        meta: {
            requiresAuth: true
        }
    },
    //components
    /*{
        path: '/components/tabs',
        name: 'tabs',
        component: () => import('../views/components/tabs.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/accordions',
        name: 'accordions',
        component: () => import('../views/components/accordions.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/modals',
        name: 'modals',
        component: () => import('../views/components/modals.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/cards',
        name: 'cards',
        component: () => import('../views/components/cards.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/carousel',
        name: 'carousel',
        component: () => import('../views/components/carousel.vue'),
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/components/timeline',
        name: 'timeline',
        component: () => import('../views/components/timeline.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/media-object',
        name: 'media-object',
        component: () => import('../views/components/media_object.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/list-group',
        name: 'list-group',
        component: () => import('../views/components/list_group.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/pricing-table',
        name: 'pricing-table',
        component: () => import('../views/components/pricing_table.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/notifications',
        name: 'notifications',
        component: () => import('../views/components/toast.vue'),
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/components/lightbox',
        name: 'lightbox',
        component: () => import('../views/components/lightbox.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/countdown',
        name: 'countdown',
        component: () => import('../views/components/countdown.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/counter',
        name: 'counter',
        component: () => import('../views/components/counter.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/components/sweetalert',
        name: 'sweetalert',
        component: () => import('../views/components/sweetalert.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //fonts
    {
        path: '/font-icons',
        name: 'font-icons',
        component: () => import('../views/font_icons.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //pages
    {
        path: '/pages/helpdesk',
        name: 'helpdesk',
        component: () => import('../views/pages/helpdesk.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pages/contact-us',
        name: 'contact-us',
        component: () => import('../views/pages/contact_us.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pages/faq',
        name: 'faq',
        component: () => import('../views/pages/faq.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pages/faq2',
        name: 'faq2',
        component: () => import('../views/pages/faq2.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pages/privacy-policy',
        name: 'privacy-policy',
        component: () => import('../views/pages/privacy_policy.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pages/coming-soon',
        name: 'coming-soon',
        component: () => import('../views/pages/coming_soon.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/error404',
        name: 'error404',
        component: () => import('../views/pages/error404.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/error500',
        name: 'error500',
        component: () => import('../views/pages/error500.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/error503',
        name: 'error503',
        component: () => import('../views/pages/error503.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/maintenence',
        name: 'maintenence',
        component: () => import('../views/pages/maintenence.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/pages/blank-page',
        name: 'blank-page',
        component: () => import('../views/pages/blank_page.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pages/sample',
        name: 'sample',
        component: () => import('../views/pages/sample.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //auth
    {
        path: '/auth/login-boxed',
        name: 'login-boxed',
        component: () => import('../views/auth/login_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/register-boxed',
        name: 'register-boxed',
        component: () => import('../views/auth/register_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/lockscreen-boxed',
        name: 'lockscreen-boxed',
        component: () => import('../views/auth/lockscreen_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/pass-recovery-boxed',
        name: 'pass-recovery-boxed',
        component: () => import('../views/auth/pass_recovery_boxed.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/login',
        name: 'login2',
        component: () => import('../views/auth/login.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/register',
        name: 'register',
        component: () => import('../views/auth/register.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/lockscreen',
        name: 'lockscreen',
        component: () => import('../views/auth/lockscreen.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/auth/pass-recovery',
        name: 'pass-recovery',
        component: () => import('../views/auth/pass_recovery.vue'),
        meta: { layout: 'auth' },
    },

    //elements
    {
        path: '/elements/alerts',
        name: 'alerts',
        component: () => import('../views/elements/alerts.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/avatar',
        name: 'avatar',
        component: () => import('../views/elements/avatar.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/badges',
        name: 'badges',
        component: () => import('../views/elements/badges.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/breadcrumbs',
        name: 'breadcrumbs',
        component: () => import('../views/elements/breadcrumbs.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/buttons',
        name: 'buttons',
        component: () => import('../views/elements/buttons.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/buttons-group',
        name: 'buttons-group',
        component: () => import('../views/elements/buttons_group.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/color-library',
        name: 'color-library',
        component: () => import('../views/elements/color_library.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/dropdown',
        name: 'dropdown',
        component: () => import('../views/elements/dropdown.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/infobox',
        name: 'infobox',
        component: () => import('../views/elements/infobox.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/jumbotron',
        name: 'jumbotron',
        component: () => import('../views/elements/jumbotron.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/loader',
        name: 'loader',
        component: () => import('../views/elements/loader.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/pagination',
        name: 'pagination',
        component: () => import('../views/elements/pagination.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/popovers',
        name: 'popovers',
        component: () => import('../views/elements/popovers.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/progress-bar',
        name: 'progress-bar',
        component: () => import('../views/elements/progress_bar.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/search',
        name: 'search',
        component: () => import('../views/elements/search.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/tooltips',
        name: 'tooltips',
        component: () => import('../views/elements/tooltips.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/treeview',
        name: 'treeview',
        component: () => import('../views/elements/treeview.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/elements/typography',
        name: 'typography',
        component: () => import(../views/elements/typography.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //tables
    {
        path: '/tables',
        name: 'tables',
        component: () => import('../views/tables.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //drag&drop
    {
        path: '/dragndrop',
        name: 'dragndrop',
        component: () => import('../views/dragndrop.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //charts
    {
        path: '/charts/apex-chart',
        name: 'apex-chart',
        component: () => import('../views/charts/apex_chart.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //widgets
    {
        path: '/widgets',
        name: 'widgets',
        component: () => import('../views/widgets.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //forms
    {
        path: '/forms/basic',
        name: 'basic',
        component: () => import('../views/forms/basic.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/input-group',
        name: 'input-group',
        component: () => import('../views/forms/input_group.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/layouts',
        name: 'layouts',
        component: () => import('../views/forms/layouts.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/validation',
        name: 'validation',
        component: () => import('../views/forms/validation.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/checkbox-radio',
        name: 'checkbox-radio',
        component: () => import('../views/forms/checkbox_radio.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/switches',
        name: 'switches',
        component: () => import('../views/forms/switches.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/wizards',
        name: 'wizards',
        component: () => import('../views/forms/wizards.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/file-upload',
        name: 'file-upload',
        component: () => import('../views/forms/fileupload.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/clipboard',
        name: 'clipboard',
        component: () => import('../views/forms/clipboard.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/date-picker',
        name: 'date-picker',
        component: () => import('../views/forms/date_range_picker.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/input-mask',
        name: 'input-mask',
        component: () => import('../views/forms/input_mask.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/quill-editor',
        name: 'quill-editor',
        component: () => import('../views/forms/quill_editor.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/touchspin',
        name: 'touchspin',
        component: () => import('../views/forms/touchspin.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/markdown-editor',
        name: 'markdown-editor',
        component: () => import('../views/forms/markdown_editor.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/forms/select2',
        name: 'select2',
        component: () => import('../views/forms/select2.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //apps
    {
        path: '/apps/chat',
        name: 'chat',
        component: () => import('../views/apps/chat.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/mailbox',
        name: 'mailbox',
        component: () => import('../views/apps/mailbox.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/todo-list',
        name: 'todo-list',
        component: () => import('../views/apps/todo_list.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/contacts',
        name: 'contacts',
        component: () => import('../views/apps/contacts.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/notes',
        name: 'notes',
        component: () => import('../views/apps/notes.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/scrumboard',
        name: 'scrumboard',
        component: () => import('../views/apps/scrumboard.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/calendar',
        name: 'calendar',
        component: () => import('../views/apps/calendar.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/invoice/list',
        name: 'invoice-list',
        component: () => import('../views/apps/invoice/list.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/invoice/preview',
        name: 'invoice-preview',
        component: () => import('../views/apps/invoice/preview.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/invoice/add',
        name: 'invoice-add',
        component: () => import('../views/apps/invoice/add.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/apps/invoice/edit',
        name: 'invoice-edit',
        component: () => import('../views/apps/invoice/edit.vue'),
        meta: {
            requiresAuth: true
        }
    },

    //tables
    {
        path: '/tables/basic',
        name: 'table-basic',
        component: () => import('../views/tables/basic.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/striped',
        name: 'striped',
        component: () => import('../views/tables/striped.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/order-sorting',
        name: 'order-sorting',
        component: () => import('../views/tables/order_sorting.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/multi-column',
        name: 'multi-column',
        component: () => import('../views/tables/multi_column.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/multiple-tables',
        name: 'multiple-tables',
        component: () => import('../views/tables/multiple_tables.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/alt-pagination',
        name: 'alt-pagination',
        component: () => import('../views/tables/alt_pagination.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/custom',
        name: 'custom',
        component: () => import('../views/tables/custom.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/range-search',
        name: 'range-search',
        component: () => import('../views/tables/range_search.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/export',
        name: 'export',
        component: () => import('../views/tables/export.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/live-dom-ordering',
        name: 'live-dom-ordering',
        component: () => import('../views/tables/live_dom_ordering.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tables/miscellaneous',
        name: 'miscellaneous',
        component: () => import('../views/tables/miscellaneous.vue'),
        meta: {
            requiresAuth: true
        }
    },
    */
];

const router = new createRouter({
    mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }

    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token');

        if (token) {
            next();
        } else {
            next({ name: '/' });
        }
    } else {
        next();
    }
});

export const logout = () => {
    // localStorage.removeItem('token');
    window.location.href = '/';
    //router.push('/');

};

export default router;
