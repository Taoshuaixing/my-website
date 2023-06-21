/*
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-05-25 17:27:50
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-21 14:41:20
 */
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
