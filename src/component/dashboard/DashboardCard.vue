<template>
	<div class="dashboard-card" :class="cardClass">
		<div class="card-header">
			<p class="title">{{ props.title }}</p>
		</div>
		<div class="card-body">
			<!-- 금액과 퍼센트 영역 -->
			<div class="value-percentage">
				<!-- 금액 (좌측) -->
				<p class="value">{{ props.value }}</p>

				<!-- 퍼센트 (우측) -->
				<div class="percentage-container">
					<div class="percentage">
						<!-- 상승/하락 아이콘 -->
						<img
							v-if="isPositive"
							:src="trendUpIcon"
							alt="up-trend"
							width="16"
							height="16"
							class="positive-icon"
						/>
						<img
							v-if="!isPositive"
							:src="trendDownIcon"
							alt="down-trend"
							width="16"
							height="16"
							class="negative-icon"
						/>
						<span class="percentage-text" :class="percentClass"
							>{{ props.percentage }}%</span
						>
					</div>
					<!-- "From last week" (두 번째 행) -->
					<p class="from-last-week" :class="percentClass">From last week</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// Importing the SVGs directly
import trendUpIcon from '@/assets/trend-up.svg';
import trendDownIcon from '@/assets/trend-down.svg';

import { computed } from 'vue';

const props = defineProps({
	title: String,
	value: String,
	percentage: String,
	percentClass: String,
});

// `percentClass`에 따라 카드의 스타일을 설정
const cardClass = computed(() => {
	return `card-${props.percentClass}`;
});

// 상승/하락 여부를 판단
const isPositive = computed(() => {
	return props.percentClass === 'positive';
});

const percentClass = computed(() => {
	return props.percentClass === 'positive' ? 'positive' : 'negative';
});
</script>

<style scoped>
.dashboard-card {
	background-color: white;
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	width: 100%;
	padding: 20px 20px 0 20px; /* 상 10px, 우 20px, 하 0px, 좌 20px */
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between; /* content를 아래로 배치 */
}

.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-header .title {
	font-size: 18px;
	font-weight: 600;
	color: #333;
}

.card-body {
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end; /* 카드 내용 하단에 배치 */
}

.value-percentage {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-body .value {
	font-size: 28px;
	font-weight: bold;
	color: #0066cc;
	margin-bottom: 10px;
}

.percentage-container {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-start;
	text-align: right;
}

.card-body .percentage {
	font-size: 14px;
}

.card-body .percentage-text {
	font-weight: bold;
	font-size: 16px;
}

.card-body .positive {
	color: green;
}

.card-body .negative {
	color: red;
}

/* 카드 클래스 */
.card-positive {
	border-left: 5px solid green;
}

.card-negative {
	border-left: 5px solid red;
}

/* SVG 아이콘 스타일 */
.card-body img {
	margin-right: 5px;
}

/* "From last week" 스타일 */
.from-last-week {
	font-size: 12px;
	color: #999;
	margin-top: 5px;
}
</style>
