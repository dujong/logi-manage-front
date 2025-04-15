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
			<div class="main-content">
				<TheView />
			</div>
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
	width: 250px; /* 사이드바 너비 고정 */
	flex-shrink: 0; /* 사이드바는 사이즈 줄어들지 않음 */
}

.main-content {
	flex: 1; /* 메인 콘텐츠는 나머지 공간 차지 */
	margin-left: 250px; /* 사이드바 너비만큼 왼쪽 여백 추가 */
	padding: 20px;
	overflow-y: auto;
}
</style>
