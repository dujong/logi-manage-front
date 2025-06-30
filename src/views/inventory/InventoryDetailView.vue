<template>
	<div class="container mt-5">
		<h3>Detail Inventory</h3>

		<!-- Inventory Form 컴포넌트 사용 -->
		<InventoryForm
			:inventory-data="inventory"
			:disabled="true"
			:button-type="'detail'"
			:button-text="'수정'"
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
});

//임시 데이터
const inventory = ref({
	name: 'q',
	price: 1000,
	quantity: 32,
	status: 'Available',
	image: null,
});

//Inventorty 상세 info API
useAxios(`/inventories/${props.id}`, {
	immediate: true,
	onSuccess: res => {
		inventory.value = res.data;
	},
	onError: err => {
		console.error('Failed to fetch inventory:', err);
	},
});
</script>

<style lang="scss" scoped></style>
