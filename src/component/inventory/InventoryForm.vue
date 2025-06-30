<template>
	<form @submit.prevent="handleSubmit">
		<div class="mb-3">
			<label for="inventory-name" class="form-label">Inventory Name</label>
			<input
				type="text"
				id="inventory-name"
				class="form-control"
				v-model="localInventory.name"
				required
				:disabled="disabled"
			/>
		</div>

		<div class="mb-3">
			<label for="price" class="form-label">Price</label>
			<input
				type="number"
				id="price"
				class="form-control"
				v-model="localInventory.price"
				required
				:disabled="disabled"
			/>
		</div>

		<div class="mb-3">
			<label for="quantity" class="form-label">Quantity</label>
			<input
				type="number"
				id="quantity"
				class="form-control"
				v-model="localInventory.quantity"
				required
				:disabled="disabled"
			/>
		</div>

		<div class="mb-3">
			<label for="status" class="form-label">Status</label>
			<select
				id="status"
				class="form-select"
				v-model="localInventory.status"
				required
				:disabled="disabled"
			>
				<option value="Available">Available</option>
				<option value="Out of Stock">Out of Stock</option>
			</select>
		</div>

		<div class="mb-3">
			<label for="image" class="form-label">Inventory Image</label>
			<input
				type="file"
				id="image"
				class="form-control"
				@change="handleImageChange"
			/>
		</div>

		<!-- button -->
		<div class="d-flex justify-content-start gap-2 mt-3">
			<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			<button class="btn btn-primary" type="submit" @click="handleSubmit">
				{{ buttonText }}
			</button>
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
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

const localInventory = ref({ ...props.inventoryData });
const router = useRouter();
const emit = defineEmits(['update:inventory', 'createInventory']);

//form submit handler
const handleSubmit = () => {
	//버튼의 props text가 생성
	if (props.buttonText === '생성') {
		emit('createInventory', localInventory.value);
	}
	//버튼의 props가 수정
	else if (props.buttonText === '수정완료') {
		emit('update:inventory', localInventory.value);
	}
	//버튼의 props가 수정완료
	else {
		router.push({
			name: 'InventoryUpdate',
		});
	}
};

const goListPage = () => {
	router.push({
		name: 'Inventories',
	});
};
</script>

<style scoped>
/* 스타일 추가 가능 */
</style>
