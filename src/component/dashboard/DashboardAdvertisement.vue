<template>
	<div class="ad-box">
		<p class="ad-title">Advertise With Us</p>
		<p class="ad-description">Boost your business with targeted ads!</p>
		<button class="ad-button">Learn More</button>
	</div>
</template>

<script setup></script>

<style scoped>
.ad-box {
	background-color: #0dc313;
	padding: 20px;
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 100%;
	height: 100%; /* 콘텐츠에 맞게 크기 자동 조정 */
	max-height: 45%;
	flex-grow: 1; /* 남은 공간을 채우도록 */
	overflow: hidden; /* 넘치는 부분을 숨깁니다 */
}

.ad-title {
	font-size: 18px;
	font-weight: bold;
	color: #333;
}

.ad-description {
	font-size: 14px;
	color: #555;
	margin: 10px 0;
}

.ad-button {
	background-color: #0066cc;
	color: white;
	border: none;
	padding: 10px;
	font-size: 14px;
	border-radius: 5px;
	cursor: pointer;
}

.ad-button:hover {
	background-color: #0055a5;
}
</style>
