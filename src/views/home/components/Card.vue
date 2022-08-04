<template>
	<div>{{ content.name }}</div>
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

<style lang="less" scoped></style>
