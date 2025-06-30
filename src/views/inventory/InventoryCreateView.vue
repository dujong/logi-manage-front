<template>
	<div class="container mt-5">
		<h3>Create New Inventory</h3>

		<!-- Inventory Form 컴포넌트 사용 -->
		<InventoryForm
			:disable="false"
			:button-type="add"
			:button-text="'생성'"
			@createInventory="createInventory"
		/>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import InventoryForm from '@/component/inventory/InventoryForm.vue';
import { useAxios } from '@/hook/useAxios';

const router = useRouter();

//product create API
const createInventory = inventoryData => {
	const { execute } = useAxios(
		'/inventories/new',
		{ method: 'post', data: inventoryData },
		{
			onSuccess: res => {
				console.log('Inventory created successfully', res.data);
				router.push({ name: 'inventories' });
			},
			onError: err => {
				console.error('Failed to create inventory', err);
			},
		},
	);

	execute();
};
</script>

<style scoped>
/* 스타일 추가 가능 */
</style>
