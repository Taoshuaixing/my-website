<template>
	<div class="common-layout">
		<el-container>
			<el-header><Header /></el-header>
			<el-main><router-view></router-view></el-main>
			<el-footer><Footer /></el-footer>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import Header from './header/index.vue';
	import Footer from './footer/index.vue';
</script>

<style lang="less" scoped></style>
