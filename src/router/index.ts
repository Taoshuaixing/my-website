import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
	{ path: '/', component: () => import('../layout/index.vue') },
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
});

export default router;
