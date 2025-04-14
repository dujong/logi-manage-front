<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheNavigation from '@/layouts/TheNavigation.vue';
import TheView from '@/layouts/TheView.vue';
</script>

<template>
	<div class="layout-container">
		<TheHeader />
		<div class="layout-body">
			<TheNavigation />
			<TheView />
		</div>
	</div>
</template>

<style scoped>
.layout-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.layout-body {
	display: flex;
	flex: 1;
	overflow: hidden;
}

.layout-body > :first-child {
	width: 250px; /* Navigation의 너비 고정 */
	flex-shrink: 0; /* 사이즈 줄어들지 않게 */
}

.layout-body > :last-child {
	flex: 1; /* View는 나머지 공간 전부 차지 */
	overflow-y: auto;
}
</style>
