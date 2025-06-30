<template>
	<nav class="mt-5" aria-label="Page navigation example">
		<ul class="pagination justify-content-center">
			<li class="page-item" :class="isPrevPage">
				<a
					class="page-link"
					href="#"
					aria-label="Previous"
					@click.prevent="$emit('page', curruentPage - 1)"
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li
				v-for="page in pageCount"
				:key="page"
				class="page-item"
				:class="{ active: curruentPage === page }"
			>
				<a class="page-link" href="#" @click.prevent="$emit('page', page)">{{
					page
				}}</a>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="#"
					aria-label="Next"
					@click.prevent="$emit('page', curruentPage + 1)"
					:class="isNextPage"
				>
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	curruentPage: {
		type: Number,
		required: true,
	},
	pageCount: {
		type: Number,
		required: true,
	},
});

defineEmits(['page']);

const isPrevPage = computed(() => ({ disabled: !(props.curruentPage > 1) }));
const isNextPage = computed(() => ({
	disabled: !(props.curruentPage < props.pageCount),
}));
</script>

<style lang="scss" scoped></style>
