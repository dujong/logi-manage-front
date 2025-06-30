<template>
	<div class="container mt-5">
		<h3>Edit Inventory</h3>

		<!-- Inventory Form 컴포넌트 사용 -->
		<InventoryForm
			:inventory-data="localInventory"
			:disabled="false"
			:button-type="'edit'"
			:button-text="'수정완료'"
		/>
	</div>
</template>

<script setup>
import InventoryForm from '@/component/inventory/InventoryForm.vue';
import { useAxios } from '@/hook/useAxios';
import { ref } from 'vue';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	inventoryData: {
		type: Object,
		default: () => ({
			name: '',
			price: '',
			quantity: '',
			status: 'Available',
			image: null,
		}),
	},
});

// 로컬 상태로 inventoryData를 복사
const localInventory = ref({ ...props.inventoryData });

//Inventorty 상세 info API
useAxios(
	`/inventories/${props.id}`,
	{ method: 'patch', data: localInventory.value },
	{
		immediate: true,
		onSuccess: res => {
			console.log('Success to fetch inventory', res);
		},
		onError: err => {
			console.error('Failed to fetch inventory:', err);
		},
	},
);
</script>

<style lang="scss" scoped></style>
