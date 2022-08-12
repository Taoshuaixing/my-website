<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		:ellipsis="false"
		@select="handleSelect"
		router
	>
		<el-menu-item
			><router-link to="home"
				><img
					class="logo_img"
					src="@/assets/pumpkin.png"
					alt="logo" /></router-link
		></el-menu-item>
		<div class="flex-grow" />
		<el-menu-item index="home">关于我</el-menu-item>
		<el-menu-item index="about">关于本站</el-menu-item>
		<el-sub-menu index="projects">
			<template #title>作品集</template>
			<el-menu-item index="projects">vue3-admin</el-menu-item>
			<el-menu-item index="projects">my-website</el-menu-item>
			<el-menu-item index="projects">item three</el-menu-item>
		</el-sub-menu>
		<el-menu-item index="/home"
			>GitHub<el-icon><Position /></el-icon
		></el-menu-item>
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
	:deep.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
		background-color: transparent;
	}
	:deep.el-menu--horizontal {
		border-bottom: 0px;
	}
</style>
