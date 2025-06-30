<template>
	<div class="d-flex justify-content-between align-items-center mb-3">
		<input
			type="text"
			class="form-control"
			v-model="searchQuery"
			placeholder="Search product"
			@input="onSearch"
		/>
		<button class="btn btn-outline-primary ms-2">Filter</button>
		<button class="btn btn-outline-secondary ms-2">Export</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	searchQuery: String,
	onSearch: Function,
});

const searchQuery = ref(props.searchQuery);
</script>
