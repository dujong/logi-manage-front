<template>
	<div class="container mt-5">
		<h3>Product Create</h3>
		<ProductForm
			:disabled="false"
			:button-type="add"
			:button-text="'생성'"
			:button-click-handler="create"
			@createProduct="createProduct"
		/>
	</div>
</template>

<script setup>
import ProductForm from '@/component/product/ProductForm.vue';
import { useAxios } from '@/hook/useAxios';
import { useRouter } from 'vue-router';

const router = useRouter();
//product create API
const createProduct = productData => {
	const { execute } = useAxios(
		'/products/new',
		{ method: 'post', data: productData },
		{
			onSuccess: res => {
				console.log('Product created successfully', res.data);
				router.push({ name: 'Products' });
			},
			onError: err => {
				console.error('Failed to create product', err);
			},
		},
	);

	execute();
};
</script>

<style lang="scss" scoped></style>
