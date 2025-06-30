<template>
	<div class="container mt-5">
		<h3>Product Detail</h3>
		<ProductForm
			:product="product"
			:disabled="true"
			:button-type="'detail'"
			:button-text="'수정'"
		/>
	</div>
</template>

<script setup>
import ProductForm from '@/component/product/ProductForm.vue';
import { useAxios } from '@/hook/useAxios';
import { ref } from 'vue';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const product = ref(null); // 상품 데이터

// Product 상세 info API
useAxios(
	`/products/${props.id}`,
	{},
	{
		immediate: true,
		onSuccess: res => {
			product.value = res.data;
		},
		onError: err => {
			console.error('Failed to fetch product:', err);
		},
	},
);
</script>
