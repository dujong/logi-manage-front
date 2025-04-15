<template>
	<div class="sidenav">
		<div class="menu-section">
			<p class="section-title">GENERAL</p>
			<div class="menu-item">
				<i class="bi bi-house-door"></i>
				<span>Dashboard</span>
			</div>

			<div class="menu-item has-submenu" @click="toggleSubmenu('productMenu')">
				<i class="bi bi-box"></i>
				<span>Product (119)</span>
				<i
					:class="productMenuOpen ? 'bi bi-chevron-down' : 'bi bi-chevron-up'"
					class="submenu-icon"
				></i>
			</div>
			<div v-if="productMenuOpen" class="submenu">
				<div class="submenu-item">Sneakers</div>
				<div class="submenu-item">Jacket</div>
				<div class="submenu-item">T-Shirt</div>
				<div class="submenu-item">Bag</div>
			</div>

			<div class="menu-item">
				<i class="bi bi-file-earmark-text"></i>
				<span>Transaction (441)</span>
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
import { ref } from 'vue';

const productMenuOpen = ref(false);

const toggleSubmenu = menu => {
	if (menu === 'productMenu') {
		productMenuOpen.value = !productMenuOpen.value;
	}
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

/* 서브메뉴 항목에 가로줄 추가 */
.submenu-item {
	padding: 8px 0;
	font-size: 14px;
	color: #495057;
	cursor: pointer;
	border-bottom: 1px solid #ddd; /* 각 서브메뉴 항목 아래에 가로 선 추가 */
}

.submenu-item:hover {
	background-color: #e9ecef;
}

.submenu-icon {
	margin-left: auto;
}
</style>
