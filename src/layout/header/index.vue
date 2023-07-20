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
			><router-link to="home">
				<el-image
					style="width: 100px"
					src="	http://img63.ddimg.cn/upload_img/00880/new/my-website-logo-1689827123.png" /></router-link
		></el-menu-item>
		<div class="flex-grow" />
		<el-menu-item index="home">关于我</el-menu-item>
		<el-menu-item index="about">关于本站</el-menu-item>
		<el-sub-menu index="">
			<template #title>作品直达</template>
			<el-menu-item index=""
				><a href="http://taoshuaixing.gitee.io/vue3-store-tools" target="_blank"
					>h5-store-tools</a
				></el-menu-item
			>
			<el-menu-item index=""
				><a href="http://taoshuaixing.gitee.io/vue3-fast-admin" target="_blank"
					>vue3-fast-admin</a
				></el-menu-item
			>
			<el-menu-item index=""
				><a href="http://taoshuaixing.gitee.io/vite-nice-ui" target="_blank"
					>vite-nice-ui</a
				></el-menu-item
			>
			<el-menu-item index=""
				><a href="http://taoshuaixing.gitee.io/news-web" target="_blank"
					>news-web</a
				></el-menu-item
			>
		</el-sub-menu>
		<el-menu-item index=""
			><a href="https://github.com/Taoshuaixing" target="_blank"
				>GitHub<el-icon> <Position /> </el-icon></a
		></el-menu-item>
		<el-menu-item index=""
			><a href="https://gitee.com/taoshuaixing" target="_blank"
				>Gitee<el-icon> <Position /> </el-icon></a
		></el-menu-item>
	</el-menu>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const activeIndex = ref('home');
	const handleSelect = (key: string, keyPath: string[]) => {
		// console.log(key, keyPath);
	};
</script>

<style lang="less" scoped>
	.flex-grow {
		flex-grow: 1;
	}

	:deep.el-menu {
		background-color: transparent;
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

	:deep.el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover {
		background-color: transparent;
	}

	.el-menu-item a {
		text-decoration: none;
	}
</style>
