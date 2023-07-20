/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-05-25 17:27:50
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-11 18:37:23
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import NiceUI from 'vite-nice-ui';
import 'vite-nice-ui/css';

import router from './router';
import '/mock/index';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(NiceUI);
app.use(ElementPlus).use(router).mount('#app');
