<template>
	<div class="common-layout">
		<el-container>
			<el-header
				><el-menu
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
					:ellipsis="false"
					@select="handleSelect"
				>
					<el-menu-item index="0">Asing</el-menu-item>
					<div class="flex-grow" />
					<el-menu-item index="1">Home</el-menu-item>
					<el-menu-item index="2">About</el-menu-item>
					<el-sub-menu index="3">
						<template #title>Projects</template>
						<el-menu-item index="3-1">vue3-admin</el-menu-item>
						<el-menu-item index="3-2">my-website</el-menu-item>
						<el-menu-item index="3-3">item three</el-menu-item>
					</el-sub-menu>
					<el-menu-item index="4">GitHub</el-menu-item>
				</el-menu></el-header
			>
			<el-main><router-view></router-view></el-main>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const activeIndex = ref('1');
	const handleSelect = (key: string, keyPath: string[]) => {
		console.log(key, keyPath);
	};
</script>

<style lang="less" scoped>
	.flex-grow {
		flex-grow: 1;
	}
</style>
