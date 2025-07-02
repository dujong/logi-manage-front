import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/views/dashboard/DashboardView.vue';
import ProductsView from '@/views/products/ProductsView.vue';
import ProductsDetailView from '@/views/products/ProductsDetailView.vue';
import ProductsCreateView from '@/views/products/ProductsCreateView.vue';
import InventoryView from '@/views/inventory/InventoryView.vue';
import ProductsUpdateView from '@/views/products/ProductsUpdateView.vue';
import InventoryCreateView from '@/views/inventory/InventoryCreateView.vue';
import InventoryDetailView from '@/views/inventory/InventoryDetailView.vue';
import InventoryUpdateView from '@/views/inventory/InventoryUpdateView.vue';

const routes = [
	/**
	 * navigation
	 */
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardView,
	},
	{
		path: '/products',
		name: 'Products',
		component: ProductsView,
	},

	/**
	 * 재고
	 */

	//재고 리스트 페이지
	{
		path: '/inventories',
		name: 'Inventories',
		component: InventoryView,
	},

	//재고 신규 등록 페이지
	{
		path: '/inventories/new',
		name: 'InventoryCreate',
		component: InventoryCreateView,
	},

	//재고 현황 상세 페이지
	{
		path: '/inventories/:id',
		name: 'InventoryDetail',
		component: InventoryDetailView,
		props: true,
	},

	//재고 수정 페이지
	{
		path: '/inventories/:id/edit',
		name: 'InventoryUpdate',
		component: InventoryUpdateView,
		props: true,
	},

	/**
	 * 상품
	 */

	//상품 신규 등록
	{
		path: '/products/new',
		name: 'ProductsCreate',
		component: ProductsCreateView,
	},

	//상품 상세 페이지
	{
		path: '/products/:id',
		name: 'ProductsDetail',
		component: ProductsDetailView,
		props: true,
	},

	//상품 수정
	{
		path: '/products/:id/edit',
		name: 'ProductsUpdate',
		component: ProductsUpdateView,
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
