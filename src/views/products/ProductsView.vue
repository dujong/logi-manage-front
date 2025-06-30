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

				<button class="btn btn-primary" @click="productsCreatePage">
					<i class="bi bi-plus-circle me-2"></i> 새로운 상품 추가
				</button>
			</div>
			<!-- 상품 테이블 -->
			<div class="table-responsive">
				<div class="product-table-container">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<!-- <th><input class="form-check-input" type="checkbox" /></th> -->
								<th>상품 이미지</th>
								<th>상품명</th>
								<th>가격</th>
								<th>수량</th>
								<th>날짜</th>
								<th>상태</th>
								<th>작업</th>
							</tr>
						</thead>
						<tbody>
							<!-- 여기에 실제 데이터가 들어갑니다 (최대 10개 항목만 표시) -->
							<tr v-for="(item, index) in productss.slice(0, 10)" :key="index">
								<!-- <td><input class="form-check-input" type="checkbox" /></td> -->
								<td>
									<img
										src="/src/assets/mail.svg"
										alt="mail"
										class="product-img"
									/>
									{{ item.product }}
								</td>
								<td>{{ item.price }}</td>
								<td>{{ item.qty }}</td>
								<td>{{ item.date }}</td>
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
									<button
										class="btn btn-sm me-2"
										@click="productsDetailPage(item.id)"
									>
										<img
											src="/src/assets/eye-open.svg"
											alt="mail"
											class="icon-style"
										/>
									</button>
									<button
										class="btn btn-sm me-2"
										@click="productsUpdatePage(item.id)"
									>
										<img
											src="/src/assets/edit.svg"
											alt="mail"
											class="icon-style"
										/>
									</button>
									<button class="btn btn-sm" @click="handleDelete(item.id)">
										<img
											src="/src/assets/delete.svg"
											alt="mail"
											class="icon-style"
										/>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- pagination -->
			<!-- <AppPagination
				:curruent-page="params._page"
				:page-count="pageCount"
				@page="page => (params._page = page)"
			/> -->
		</div>
	</div>
</template>

<script setup>
import { useAxios } from '@/hook/useAxios';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import AppSearchFilter from '@/component/app/AppSearchFilter.vue';

const productss = ref([
	{
		id: 1,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 2,
		product: 'Kanky Kitadakate (Red)',
		price: '$22.00',
		qty: 100,
		date: '04/16/23 at 7:20 PM',
		status: 'Out of Stock',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 3,
		product: 'Kanky Kitadakate (Blue)',
		price: '$21.00',
		qty: 50,
		date: '04/15/23 at 6:10 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 4,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 5,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 6,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 7,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 8,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 9,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 10,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 11,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: 12,
		product: 'Kanky Kitadakate (Green)',
		price: '$20.00',
		qty: 234,
		date: '04/17/23 at 8:25 PM',
		status: 'Available',
		image: 'https://via.placeholder.com/100',
	},
]);

//pagination
// const params = ref({
// 	_sort: 'createdAt',
// 	_order: 'desc',
// 	_page: 1,
// 	_limit: 10,
// 	title_like: '',
// });

// const { response, data: products } = useAxios('/products', { params });
const { response, data: products } = useAxios('/products');

//pagination
// const totalCount = computed(() => response.value.headers['x-total-count']);
// const pageCount = computed(() =>
// 	Math.ceil(totalCount.value / params.value._limit),
// );

const router = useRouter();

//상품 신규 등록 페이지 이동
const productsCreatePage = () => {
	router.push({
		name: 'ProductsCreate',
	});
};

//상품 상세 페이지 이동
const productsDetailPage = id => {
	console.log(id);
	router.push({
		path: `/products/${id}`,
	});
};

//상품 수정 페이지 이동
const productsUpdatePage = id => {
	router.push({
		path: `/products/${id}/edit`,
	});
};

//상품 삭제
const deleteProductById = id => {
	const { execute: deleteExcute } = useAxios(
		`/products/${id}`,
		{
			method: 'delete',
		},
		{
			onSuccess: () => {
				products.value = products.value.fillter(product => product.id !== id);
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
	if (confirm('상품을 삭제하시겠습니까?')) {
		deleteProductById(id);
	}
};
</script>

<style scoped>
/* 테이블 스타일 */
.table {
	font-size: 14px;
}

.table th,
.table td {
	vertical-align: middle;
}

/* 상품 이미지 스타일 */
.product-img {
	width: 40px; /* 이미지 크기 조정 */
	height: 40px;
	object-fit: cover;
	border-radius: 8px;
	margin-left: 5px;
	margin-right: 5px;
}

/* 테이블 외부 컨테이너 테두리 추가 */
.product-table-container {
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 20px;
}

.page-item .page-link {
	color: #007bff;
}

.page-item .page-link:hover {
	background-color: #f1f1f1;
	color: #0056b3;
}

.products-main {
	width: 100%;
	height: 100%;
	padding: 20px;
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border: 1px solid #150f0f;
}

.icon-style {
	width: 20px; /* 아이콘의 너비를 적절한 크기로 조정 */
	height: 20px; /* 아이콘의 높이를 적절한 크기로 조정 */
	object-fit: contain; /* 아이콘이 비율에 맞게 잘리도록 */
}
</style>
