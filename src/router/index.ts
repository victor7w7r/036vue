import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import MainLayout from '@/Layout.vue';

import HomePage from '@/pages/HomePage.vue';
import StorePage from '@/pages/StorePage.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/', 
        name: 'root',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: HomePage,
            },
            {
                path: 'store',
                name: 'store',
                component: StorePage,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;