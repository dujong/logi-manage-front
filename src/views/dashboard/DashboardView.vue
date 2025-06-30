<template>
	<div class="dashboard-container">
		<!-- 상단 영역 (좌측, 우측) -->
		<div class="dashboard-top">
			<div class="dashboard-top-left">
				<div class="sales-target">
					<p class="title">Order Processing Status</p>
					<!-- 필터와 정렬 -->
					<div class="d-flex justify-content-between mb-3">
						<!-- Status 필터 -->
						<div>
							<label for="statusFilter" class="form-label">Status Filter</label>
							<select class="form-select form-select-sm" v-model="statusFilter">
								<option value="">All</option>
								<option value="Success">Success</option>
								<option value="Pending">Pending</option>
							</select>
						</div>
						<!-- 정렬 버튼 -->
						<div>
							<button
								class="btn btn-outline-secondary btn-sm"
								@click="toggleSort('product')"
							>
								<i
									class="bi bi-sort-alpha-down"
									:class="{ 'bi-sort-alpha-up': isSortDescending('product') }"
								></i>
								Product
							</button>
							<button
								class="btn btn-outline-secondary btn-sm"
								@click="toggleSort('price')"
							>
								<i
									class="bi bi-sort-numeric-down"
									:class="{ 'bi-sort-numeric-up': isSortDescending('price') }"
								></i>
								Price
							</button>
							<button
								class="btn btn-outline-secondary btn-sm"
								@click="toggleSort('sales')"
							>
								<i
									class="bi bi-sort-numeric-down"
									:class="{ 'bi-sort-numeric-up': isSortDescending('sales') }"
								></i>
								Sales
							</button>
						</div>
					</div>

					<!-- 주문 항목 리스트 -->
					<div class="order-list">
						<div
							class="order-item"
							v-for="(item, index) in filteredData"
							:key="index"
							@click="orderDetailPage(item.id)"
						>
							<div class="order-item-info">
								<p class="item-title">{{ item.product }} - {{ item.name }}</p>
								<p class="item-details">
									Price: ${{ item.price }} | Sales: {{ item.sales }}
								</p>
							</div>
							<span
								:class="
									item.status === 'Success'
										? 'badge bg-success'
										: 'badge bg-warning'
								"
							>
								{{ item.status }}
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="dashboard-top-right">
				<div class="grid-container">
					<DashboardCard
						title="Total Revenue"
						value="$81,000"
						percentage="10.6"
						percentClass="positive"
					/>
					<DashboardCard
						title="Total Customers"
						value="5,000"
						percentage="1.5"
						percentClass="positive"
					/>
					<DashboardCard
						title="Total Transactions"
						value="12,000"
						percentage="3.6"
						percentClass="positive"
					/>
					<DashboardCard
						title="Total Products"
						value="5,000"
						percentage="-1.5"
						percentClass="negative"
					/>
				</div>
				<Advertisement />
			</div>
		</div>

		<!-- 하단 영역 -->
		<div class="dashboard-bottom">
			<div class="dashboard-bottom-content">
				<div class="inventory-status">
					<!-- 재고 현황 -->
					<h3 class="inventory-title">재고 현황</h3>
					<table class="table table-striped">
						<thead>
							<tr>
								<th>상품명</th>
								<th>창고명</th>
								<th>재고 수량</th>
								<th>재고 상태</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="(item, index) in inventoryStatusClass"
								:key="index"
								@click="inventotryDetailPage(item.id)"
							>
								<td>{{ item.product }}</td>
								<td>{{ item.warehouse }}</td>
								<td>{{ item.stock }}</td>
								<td>
									<span
										:class="[
											'badge',
											item.statusClass,
											'rounded-pill',
											'text-white',
										]"
									>
										{{ item.status }}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAxios } from '@/hook/useAxios';
import { useRouter } from 'vue-router';

import DashboardCard from '@/component/dashboard/DashboardCard.vue';
import Advertisement from '@/component/dashboard/DashboardAdvertisement.vue';

//pagination
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});

//dashboard api 호출
const {
	response,
	data: dashboard,
	error,
	loading,
} = useAxios('/dashboard', { params });

const orderData = ref([
	{
		id: 1,
		product: '021231',
		name: 'Kanky Kitadakate (Green)',
		price: 20.0,
		sales: 3000,
		status: 'Success',
	},
	{
		id: 2,
		product: '021232',
		name: 'Kanky Kitadakate (Red)',
		price: 22.0,
		sales: 2311,
		status: 'Success',
	},
	{
		id: 3,
		product: '021233',
		name: 'Kanky Kitadakate (Blue)',
		price: 20.0,
		sales: 2111,
		status: 'Pending',
	},
	{
		id: 4,
		product: '021234',
		name: 'Kanky Kitadakate (Yellow)',
		price: 20.0,
		sales: 1661,
		status: 'Success',
	},
]);

const inventoryData = ref([
	{
		id: 1,
		product: 'Kanky Kitadakate (Green)',
		warehouse: 'Warehouse 1',
		stock: 50,
		status: 'In Stock',
	},
	{
		id: 2,
		product: 'Kanky Kitadakate (Red)',
		warehouse: 'Warehouse 2',
		stock: 500,
		status: 'In Stock',
	},
	{
		id: 3,
		product: 'Kanky Kitadakate (Blue)',
		warehouse: 'Warehouse 1',
		stock: 10,
		status: 'Low Stock',
	},
]);

const statusFilter = ref('');
const sortField = ref('product');
const sortDirection = ref('asc');

// 정렬 토글 함수
const toggleSort = field => {
	if (sortField.value === field) {
		sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
	} else {
		sortField.value = field;
		sortDirection.value = 'asc';
	}
};

// 정렬 방향 확인
const isSortDescending = field =>
	sortField.value === field && sortDirection.value === 'desc';

const sortedData = computed(() => {
	return [...orderData.value].sort((a, b) => {
		let comparison = 0;
		if (typeof a[sortField.value] === 'string') {
			comparison = a[sortField.value].localeCompare(b[sortField.value]);
		} else {
			comparison = a[sortField.value] - b[sortField.value];
		}
		return sortDirection.value === 'asc' ? comparison : -comparison;
	});
});

const filteredData = computed(() => {
	return sortedData.value.filter(
		item => !statusFilter.value || item.status === statusFilter.value,
	);
});

// 상태에 따른 색상 반환을 computed로 처리
const inventoryStatusClass = computed(() => {
	return inventoryData.value.map(item => {
		// 상태에 따른 클래스 설정
		switch (item.status) {
			case 'In Stock':
				item.statusClass = 'bg-success';
				break;
			case 'Low Stock':
				item.statusClass = 'bg-warning';
				break;
			case 'Out of Stock':
				item.statusClass = 'bg-danger';
				break;
			default:
				item.statusClass = '';
		}
		return item;
	});
});

const router = useRouter();

//재고 현황 상세 페이지 이동
const inventotryDetailPage = id => {
	router.push({
		name: 'InventoryDetail',
		params: {
			id,
		},
	});
};

//주문 현황 상세 페이지 이동
const orderDetailPage = id => {
	router.push({
		name: 'OrderDetail',
		params: {
			id,
		},
	});
};
</script>

<style scoped>
.dashboard-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.dashboard-top {
	display: flex;
	gap: 20px;
	flex: 1;
}

.dashboard-top-left,
.dashboard-top-right {
	flex: 1;
	padding: 20px;
	background-color: #f4f4f4;
	border-radius: 15px;
}

.sales-target .title {
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 15px;
	color: #333;
}

.order-controls {
	margin-bottom: 20px;
}

.order-list {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.order-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dashboard-bottom {
	flex: 1;
	display: flex;
	justify-content: center;
	border-radius: 15px;
}

.dashboard-bottom-content {
	padding-top: 30px;
	display: flex;
	width: 100%;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr); /* 2개의 열로 나눔 */
	gap: 20px; /* 각 카드 사이의 간격 */
	padding-bottom: 20px;
}

.inventory-status {
	width: 100%;
	padding: 20px;
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border: 1px solid #150f0f;
}

.inventory-title {
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 20px;
}

.table th,
.table td {
	padding: 10px;
	text-align: left;
	border-bottom: 1px solid #ddd;
}

.badge {
	font-size: 14px;
	padding: 8px 12px;
	display: inline-block;
}

.bg-success {
	background-color: #28a745 !important;
}

.bg-warning {
	background-color: #ffc107 !important;
}

.bg-danger {
	background-color: #dc3545 !important;
}
</style>
