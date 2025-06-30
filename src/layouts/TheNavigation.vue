<template>
	<div class="sidenav">
		<div class="menu-section">
			<p class="section-title">GENERAL</p>
			<div class="menu-item" @click="dashboardPage">
				<i class="bi bi-house-door"></i>
				<span>Dashboard</span>
			</div>

			<div class="menu-item has-submenu" @click="productsPage">
				<i class="bi bi-box"></i>
				<span>Product</span>
			</div>
			<div class="menu-item" @click="inventoryPage">
				<i class="bi bi-file-earmark-text"></i>
				<span>Inventory</span>
			</div>
			<div class="menu-item">
				<i class="bi bi-person"></i>
				<span>Shipment</span>
			</div>
			<div class="menu-item">
				<i class="bi bi-person"></i>
				<span>Customers</span>
			</div>
			<div class="menu-item">
				<i class="bi bi-bar-chart-line"></i>
				<span>Sales Report</span>
			</div>
		</div>

		<div class="menu-section">
			<p class="section-title">TOOLS</p>
			<div class="menu-item">
				<i class="bi bi-gear"></i>
				<span>Account & Settings</span>
			</div>
			<div class="menu-item">
				<i class="bi bi-question-circle"></i>
				<span>Help</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
//대시보드 페이지 이동
const dashboardPage = () => {
	router.push({
		name: 'Dashboard',
	});
};
//제품 리스트 페이지 이동
const productsPage = () => {
	router.push({
		name: 'Products',
	});
};
//인벤토리 리스트 페이지 이동
const inventoryPage = () => {
	router.push({
		name: 'Inventories',
	});
};
</script>

<style scoped>
.sidenav {
	width: 250px;
	height: 100%;
	background-color: #fff;
	padding-top: 20px;
	position: fixed;
	top: 0;
	left: 0;
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
	font-family: Arial, sans-serif;
}

.menu-section {
	padding: 10px 15px;
}

.section-title {
	font-weight: bold;
	color: #6c757d;
	margin-bottom: 10px;
}

.menu-item {
	display: flex;
	align-items: center;
	padding: 8px 10px;
	color: #495057;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s;
	position: relative;
}

.menu-item:hover {
	background-color: #f1f1f1;
}

.menu-item i {
	margin-right: 10px;
}

/* 서브메뉴가 펼쳐졌을 때 표시되는 세로 선 */
.submenu {
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	border-left: 2px solid #ddd; /* 세로 선 */
	margin-left: 20px; /* 선을 좀 더 떨어뜨려서 추가 */
}
</style>
