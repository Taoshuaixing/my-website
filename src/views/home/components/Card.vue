<template>
	<div class="card-container">
		<a href="#">
			<div class="container-top">
				<img :src="'/src/assets/' + content.imgUrl" :alt="content.name" />
			</div>
			<div class="container-bottom">
				<h2>{{ content.name }}</h2>
				<p>{{ content.content }}</p>
			</div>
		</a>
	</div>
</template>

<script setup lang="ts">
	import { defineProps, PropType } from 'vue';
	import { IProjectList } from '../type';

	defineProps({
		content: {
			type: Object as PropType<IProjectList>,
			required: true,
		},
	});
</script>

<style lang="less" scoped>
	.card-container {
		position: relative;
		width: 45%;
		border-radius: 20px;
		border: 5px solid #000;
		overflow: hidden;
		background: #fff;
		min-height: 360px;
		margin: 3% 0;
	}
	.card-container a {
		display: block;
		text-decoration: none;
		color: #000;
	}
	.container-top img {
		width: 100%;
	}
	.container-bottom {
		padding: 0 5%;
	}
	.container-bottom p {
		letter-spacing: 3px;
		font-size: 14px;
	}
</style>
