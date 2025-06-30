<template>
	<div class="container mt-5">
		<h3>Product Update</h3>
		<ProductForm
			:product="product"
			:disabled="true"
			:button-type="'edit'"
			:button-text="'수정완료'"
			:button-click-handler="updateProduct"
		/>
	</div>
</template>

<script setup>
import ProductForm from '@/component/product/ProductForm.vue';
import { useAxios } from '@/hook/useAxios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});
const router = useRouter(); //router
const product = ref(null); //상품 데이터

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

//product update API
const updateProduct = productData => {
	const { execute } = useAxios(
		`/products/${productData.id}`,
		{ method: 'patch', data: productData },
		{
			onSuccess: res => {
				console.log('Product updated successfully', res.data);
				router.push({ name: 'Products' });
			},
			onError: err => {
				console.error('Failed to update product', err);
			},
		},
	);

	execute();
};
</script>
