import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/views/dashboard/DashboardView.vue';

const routes = [
	/**
	 * navigation
	 */
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardView,
	},

	/**
	 * 재고
	 */

	// 재고 현황 상세 페이지
	{
		path: '/inventories/:id',
		name: 'InventoryDetail',
		component: null,
		props: true,
	},

	/**
	 * 주문
	 */
	// 주문 현황 상세 페이지
	{
		path: '/orders/:id',
		name: 'OrderDetail',
		component: null,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
