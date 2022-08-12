import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/layout/index.vue'),
		redirect: '/home',
		children: [
			{
				path: '/home',
				component: () => import('@/views/home/index.vue'),
			},
			{ path: '/about', component: () => import('@/views/about/index.vue') },
			{
				path: '/projects',
				component: () => import('@/views/projects/index.vue'),
			},
		],
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
});

export default router;
