<template>
	<div class="products-main">
		<div class="container mt-4">
			<!-- 필터&새로운 상품 추가 버튼 -->
			<div class="d-flex justify-content-between align-items-center mb-3">
				<!-- 필터를 더 넓게 만들기 위해 col-md-8을 추가 -->
				<div class="col-md-8">
					<AppSearchFilter
						:searchQuery="searchQuery"
						@onSearch="handleSearch"
					/>
				</div>

				<button class="btn btn-primary" @click="inventoryCreatePage">
					<i class="bi bi-plus-circle me-2"></i> 새로운 재고 추가
				</button>
			</div>

			<!-- Inventories Table Area -->
			<InventoryTableView
				:products="inventories"
				:viewInventory="viewInventory"
				:updateInventory="updateInventory"
				:deleteInventory="handleDelete"
			/>

			<!-- <AppPagination
				:currentPage="currentPage"
				:totalPages="totalPages"
				@changePage="changePage"
			/> -->
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import InventoryTableView from '@/views/inventory/InventoryTableView.vue';
import AppSearchFilter from '@/component/app/AppSearchFilter.vue';
import { useRouter } from 'vue-router';
import { useAxios } from '@/hook/useAxios';

//pagination
// const params = ref({
// 	_sort: 'createdAt',
// 	_order: 'desc',
// 	_page: 1,
// 	_limit: 10,
// 	title_like: '',
// });

const searchQuery = ref('');

// const { response, data: inventories } = useAxios('/products', { params });
const { data: inventories } = useAxios('/inventories');

//pagination
// const totalCount = computed(() => response.value.headers['x-total-count']);
// const pageCount = computed(() =>
// 	Math.ceil(totalCount.value / params.value._limit),
// );

//재고 신규 등록 페이지 이동
const inventoryCreatePage = () => {
	router.push({
		name: 'InventoryCreate',
	});
};

const router = useRouter();
const viewInventory = id => {
	console.log('View Inventory:', id);
	router.push({
		name: 'InventoryDetail',
		params: {
			id,
		},
	});
};
const updateInventory = id => {
	console.log('Update Inventory:', id);
	router.push({
		name: 'InventoryUpdate',
		params: {
			id,
		},
	});
};
const deleteInventoryById = id => {
	console.log('Delete Inventory:', id);
	//상품 삭제
	const { execute: deleteExcute } = useAxios(
		`/inventories/${id}`,
		{
			method: 'delete',
		},
		{
			onSuccess: () => {
				inventories.value = inventories.value.fillter(
					inventories => inventories.id !== id,
				);
				alert('상품이 삭제되었습니다.');
			},
			onError: err => {
				console.error(err);
				alert('삭제 중 오류가 발생했습니다.');
			},
		},
	);
	deleteExcute();
};
const handleDelete = id => {
	if (confirm('재고를 삭제하시겠습니까?')) {
		deleteInventoryById(id);
	}
};

const handleSearch = query => {
	searchQuery.value = query;
};
</script>
