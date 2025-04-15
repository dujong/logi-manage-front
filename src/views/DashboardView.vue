<template>
	<div class="dashboard-container">
		<!-- 상단 영역 (좌측, 우측) -->
		<div class="dashboard-top">
			<div class="dashboard-top-left">
				<div class="sales-target">
					<p>첫번째 영역</p>
				</div>
			</div>

			<div class="dashboard-top-right">
				<div class="total-revenue">
					<p class="title">Total Revenue</p>
				</div>
				<div class="increase-sales">
					<p>두번째 영역</p>
				</div>
			</div>
		</div>

		<!-- 하단 영역 (단일 영역) -->
		<div class="dashboard-bottom">
			<div class="dashboard-bottom-content">
				<div class="customer-growth">
					<p>세번째 영역</p>
				</div>
				<div class="product-popular">
					<p>Product Popular</p>
					<table>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Sales</th>
							<th>Status</th>
						</tr>
						<tr>
							<td>Product 1</td>
							<td>$20.00</td>
							<td>3000</td>
							<td>Success</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.dashboard-container {
	display: flex;
	flex-direction: column;
	height: 100vh; /* 화면 전체 높이를 사용 */
}

.dashboard-top {
	display: flex;
	gap: 20px;
	flex: 1; /* 상단이 화면의 절반을 차지 */
}

.dashboard-top-left,
.dashboard-top-right {
	flex: 1; /* 좌측, 우측 영역을 1:1 비율로 나누기 */
}

.dashboard-top-left,
.dashboard-top-right {
	padding: 20px;
	background-color: #f4f4f4;
}

.sales-target .title,
.total-revenue .title {
	font-weight: bold;
	margin-bottom: 10px;
}

.progress-bar {
	height: 10px;
	background-color: #ddd;
	width: 60%;
}

.dashboard-bottom {
	flex: 1; /* 하단 영역이 화면의 절반을 차지 */
	display: flex;
	justify-content: center;
}

.dashboard-bottom-content {
	padding-top: 30px;
	display: flex;
	width: 100%;
}

.customer-growth,
.product-popular {
	flex: 1;
	padding: 20px;
	background-color: #f4f4f4;
}

table {
	width: 100%;
	border-collapse: collapse;
}

th,
td {
	padding: 10px;
	text-align: left;
	border-bottom: 1px solid #ddd;
}

@media (max-width: 768px) {
	/* 작은 화면에서 상단과 하단을 세로로 배치 */
	.dashboard-top {
		flex-direction: column;
	}

	.dashboard-top-left,
	.dashboard-top-right {
		width: 100%; /* 상단 좌측과 우측을 세로로 배치 */
	}

	.dashboard-bottom {
		flex-direction: column; /* 하단도 세로로 배치 */
	}

	.customer-growth,
	.product-popular {
		width: 100%; /* 하단을 세로로 나누기 */
	}
}
</style>
