<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-05-25 17:27:50
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-21 15:54:54
-->
<template>
	<div class="container">
		<h1>你好！我是陶帅星</h1>
		<div class="about">
			<h3>关于我</h3>
			<br />
			<p>
				我是一名生活在北京的程序猿，目前专注于<n-mark blod
					>前端低代码领域。</n-mark
				>
			</p>
			<p>
				<n-mark
					>我热爱前端，当一些想法和创意通过代码实现的时候，我会有很强烈的成就感。</n-mark
				>无论是在我的作品还是我的生活空间，我都会努力让它们拥有最佳的体验。另外，我喜欢浏览并收藏那些别出心裁的网站，它们总能在我构思作品时激发我的灵感。
			</p>
			<p>
				一直以来，我都专注于前端技术，并且坚持在做我喜欢的事情：<n-mark
					>构建令人赏心悦目的产品！</n-mark
				>
			</p>
			<p>在这里，我会记录我的想法和创意，随便逛逛吧。</p>
		</div>
		<div class="about-project">
			<h3>个人作品</h3>
			<h4>
				<n-mark type="success"
					>我擅长把想法💡变为现实，始终将用户体验摆在首位。</n-mark
				>
			</h4>
			<n-loading :loading="loading" tip="Loading..." indicator="dynamic-circle">
				<div class="about-bottom">
					<Card
						v-for="item in list"
						:key="item.id"
						:content="item"
						class="card-list"
					/>
				</div>
			</n-loading>
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
	const loading = ref(true);
	axios({
		method: 'get',
		url: '/projectList',
	}).then(({ data }) => {
		list.value = data.result;
		loading.value = false;
	});
</script>

<style lang="less">
	.container {
		padding: 50px 0;
	}

	.container .about,
	.container .about,
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
		margin: 20px 0 0;
		border-left: 3px solid #000;
	}

	.container .about p {
		background-color: #fff;
		padding: 5px;
		color: #4b4b4b;
		font-weight: bold;
		letter-spacing: 3px;
		display: inline-block;
		font-size: 15px;
		line-height: 30px;
	}

	.container .about p span {
		font-size: 17px;
		color: rgb(1, 0, 58);
	}

	.about-bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		position: relative;
	}
</style>
