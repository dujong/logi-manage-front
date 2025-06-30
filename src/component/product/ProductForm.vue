<template>
	<div class="container mt-5">
		<h3>{{ headerText }}</h3>

		<form @submit.prevent="handleSubmit">
			<div class="row">
				<!-- 왼쪽: 상품 정보 입력 폼 -->
				<div class="col-md-8">
					<form>
						<!-- Product Name -->
						<div class="mb-3">
							<label for="product-name" class="form-label">Product Name</label>
							<input
								type="text"
								class="form-control"
								v-model="localProduct.productName"
								:disabled="disabled"
							/>
						</div>

						<!-- Price -->
						<div class="mb-3">
							<label for="price" class="form-label">Price</label>
							<input
								type="text"
								class="form-control"
								v-model="localProduct.price"
								:disabled="disabled"
							/>
						</div>

						<!-- Description -->
						<div class="mb-3">
							<label for="description" class="form-label">Description</label>
							<input
								type="text"
								class="form-control"
								v-model="localProduct.description"
								:disabled="disabled"
							/>
						</div>

						<!-- Color -->
						<div class="mb-3">
							<label for="color" class="form-label">Color</label>
							<input
								type="text"
								class="form-control"
								v-model="localProduct.color"
								:disabled="disabled"
							/>
						</div>

						<!-- Quantity -->
						<div class="mb-3">
							<label for="quantity" class="form-label">Quantity</label>
							<input
								type="text"
								class="form-control"
								v-model="localProduct.quantity"
								:disabled="disabled"
							/>
						</div>

						<!-- Category -->
						<div class="mb-3">
							<label for="category" class="form-label">Category</label>
							<input
								type="text"
								class="form-control"
								v-model="localProduct.category"
								:disabled="disabled"
							/>
						</div>
					</form>
				</div>

				<!-- 오른쪽: 이미지 업로드 -->
				<div class="col-md-4">
					<div class="image-section">
						<label for="image" class="form-label">Image Product</label>
						<div class="d-flex flex-column align-items-center">
							<div class="mb-3">
								<button class="btn btn-outline-primary w-100">
									Upload Image
								</button>
							</div>
							<!-- 이미지를 더 크게 설정 -->
							<div>
								<img
									src="https://via.placeholder.com/350x350"
									alt="Product Image"
									class="product-image"
								/>
							</div>
							<small class="form-text text-muted"
								>Note: Format photos SVG, PNG, or JPG (Max size 4MB)</small
							>
						</div>
					</div>
				</div>

				<!-- button -->
				<div class="d-flex justify-content-start gap-2 mt-3">
					<button class="btn btn-outline-dark" @click="goListPage">목록</button>
					<button class="btn btn-primary" :disabled="disabled" type="submit">
						{{ buttonText }}
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	buttonType: {
		type: String,
		required: true,
	},
	buttonText: {
		type: String,
		required: true,
	},
});

const localProduct = ref({ ...props.product });

//header text
const headerText = computed(() => {
	switch (props.buttonType) {
		case 'edit':
			return 'Edit Product'; // 수정 모드일 때
		case 'detail':
			return 'Detail Product'; // 상세 보기 모드일 때
		case 'add':
		default:
			return 'Add Product'; // 기본값은 신규 등록
	}
});

const emit = defineEmits(['update:product', 'createProduct']);
//form submit handler
const handleSubmit = () => {
	if (props.product.id) {
		emit('update:product', localProduct.value);
	} else {
		emit('createProduct', localProduct.value);
	}
};

const router = useRouter();
const goListPage = () => {
	router.push({
		name: 'Products',
	});
};
</script>

<style scoped>
/* 왼쪽 상품 정보 영역 배경 */
.col-md-8 {
	background-color: #f8f9fa; /* 연한 회색 배경 */
	padding: 20px;
	border-radius: 8px;
	margin-right: 0px;
}

/* 오른쪽 이미지 업로드 영역 배경 */
.col-md-4 {
	background-color: #e9ecef; /* 좀 더 진한 연한 회색 배경 */
	padding: 20px;
	border-radius: 8px;
}

/* 이미지 스타일 */
.product-image {
	width: 100%; /* 이미지가 부모 div 크기에 맞게 확장 */
	height: auto; /* 비율 유지 */
	object-fit: contain; /* 이미지 비율 맞춰서 채우기 */
}
</style>
