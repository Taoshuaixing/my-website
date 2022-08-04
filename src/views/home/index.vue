<template>
	<div class="container">
		<h1>你好！我是陶帅星</h1>
		<div class="about-me">
			<h3>关于我</h3>
			<br />
			<p>我是一名生活在北京的软件开发者，目前从事前端产品研发工作。</p>
			<p>
				我热爱设计，无论是在我的作品还是我的生活空间，我都会努力让它们拥有最佳的体验。另外，我喜欢浏览并收藏那些别出心裁的网站，它们总能在我构思作品时激发我的灵感。
			</p>
			<p>
				一直以来，我都专注于前端技术，并且坚持在做我喜欢的事情：<span
					>构建令人赏心悦目的产品！</span
				>
			</p>
			<p>在这里，我会记录我的想法和创意，随便逛逛吧。</p>
		</div>
		<div class="about-project">
			<h3>个人作品</h3>
			<Card v-for="item in list" :key="item.id" :content="item" />
		</div>
		<div class="call-me"></div>
	</div>
</template>

<script setup lang="ts">
	import Card from './components/Card.vue';
	import { ref } from 'vue';
	import axios from 'axios';
	import { IProjectList } from './type';

	const list = ref<IProjectList[]>([]);

	axios({
		method: 'get',
		url: '/projectList',
	}).then(({ data }) => {
		console.log(data);
		list.value = data.result;
	});
</script>

<style lang="less" scoped>
	.container {
		padding: 50px 0;
	}
	.container .about-me,
	.container .about-me,
	.project .call-me {
		padding: 20px 0;
	}
	.container h1 {
		font-size: 35px;
	}
	.container h3 {
		background: #fff;
		display: inline-block;
		padding: 3px 10px;
		margin: 0;
		border-left: 3px solid #000;
	}
	.container .about-me p {
		background-color: #fff;
		padding: 5px;
		color: #4b4b4b;
		font-weight: bold;
		letter-spacing: 3px;
		display: inline-block;
		font-size: 15px;
	}
	.container .about-me p span {
		font-size: 17px;
		color: rgb(1, 0, 58);
	}
</style>
