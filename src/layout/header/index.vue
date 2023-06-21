<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		:ellipsis="false"
		@select="handleSelect"
		router
	>
		<el-menu-item><router-link to="home">
				<img
					class="logo_img"
					src="@/assets/my-website-logo.png"
					alt="logo"
				/>
			</router-link></el-menu-item>
		<div class="flex-grow" />
		<el-menu-item index="home">关于我</el-menu-item>
		<el-menu-item index="about">关于本站</el-menu-item>
		<el-sub-menu index="">
			<template #title>作品直达</template>
			<el-menu-item index=""><a
					href="http://www.tsxweb.cn/h5tools/#/"
					target="_blank"
				>h5-store-tools</a></el-menu-item>
			<el-menu-item index=""><a
					href=""
					target="_blank"
				>vue3-admin</a></el-menu-item>
			<el-menu-item index=""><a
					href="http://localhost:5173/#/home"
					target="_blank"
				>my-website</a></el-menu-item>
			<el-menu-item index=""><a
					href=""
					target="_blank"
				>vue3-big-screen</a></el-menu-item>
		</el-sub-menu>
		<el-menu-item index=""><a
				href="https://github.com/Taoshuaixing"
				target="_blank"
			>GitHub<el-icon>
					<Position />
				</el-icon></a></el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeIndex = ref('home');
const handleSelect = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>

<style lang="less" scoped>
.flex-grow {
	flex-grow: 1;
}

:deep.el-menu {
	background-color: transparent;
}

.logo_img {
	width: 60px;
	aspect-ratio: 1.12;
}

:deep.el-menu-item:hover,
:deep.el-menu-item:not(.is-disabled):focus {
	background-color: transparent;
}

:deep.logo_img[data-v-09387984] {
	width: 110px;
	aspect-ratio: 0;
}

:deep.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
	background-color: transparent;
}

:deep.el-menu--horizontal {
	border-bottom: 0px;
}

:deep.el-menu--horizontal>.el-sub-menu .el-sub-menu__title:hover {
	background-color: transparent;
}

.el-menu-item a {
	text-decoration: none;
}
</style>
