<template>
	<div class="table-responsive">
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th>Inventory Image</th>
					<th>Inventory Name</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in inventories" :key="index">
					<td>
						<img :src="item.image" alt="Product Image" class="product-img" />
					</td>
					<td>{{ item.productName }}</td>
					<td>{{ item.price }}</td>
					<td>{{ item.quantity }}</td>
					<td>
						<span
							:class="{
								'badge bg-success': item.status === 'Available',
								'badge bg-danger': item.status === 'Out of Stock',
							}"
						>
							{{ item.status }}
						</span>
					</td>
					<td>
						<button class="btn btn-sm me-2" @click="viewInventory(item.id)">
							<img
								src="/src/assets/eye-open.svg"
								alt="mail"
								class="icon-style"
							/>
						</button>
						<button class="btn btn-sm me-2" @click="updateInventory(item.id)">
							<img src="/src/assets/edit.svg" alt="mail" class="icon-style" />
						</button>
						<button class="btn btn-sm" @click="deleteInventory(item.id)">
							<img src="/src/assets/delete.svg" alt="mail" class="icon-style" />
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	inventories: Array,
	viewInventory: Function,
	updateInventory: Function,
	deleteInventory: Function,
});

const inventories = ref(props.inventories);

//example data
inventories.value = [
	{
		id: 1,
		productName: 'Sneakers A (Green)',
		price: '$20.00',
		quantity: 150,
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 2,
		productName: 'Sneakers B (Red)',
		price: '$22.00',
		quantity: 80,
		status: 'Out of Stock',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 3,
		productName: 'Sneakers C (Blue)',
		price: '$25.00',
		quantity: 200,
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 4,
		productName: 'Sneakers D (Black)',
		price: '$19.00',
		quantity: 120,
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 5,
		productName: 'Sneakers E (White)',
		price: '$30.00',
		quantity: 50,
		status: 'Out of Stock',
		image: 'https://via.placeholder.com/100',
	},
];
</script>
