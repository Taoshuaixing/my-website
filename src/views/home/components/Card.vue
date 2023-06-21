<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-05-25 17:27:50
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-21 16:35:59
-->
<template>
	<div class="card-container">
		<a
			:href="content.link"
			target="_blank"
		>
			<div class="container-top">
				<img
					:src="content.imgUrl"
					:alt="content.name"
				/>
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
import { IProjectList } from '@/views/home/type';

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
	animation: showCard 1s 1;
}

@keyframes showCard {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
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
}</style>
