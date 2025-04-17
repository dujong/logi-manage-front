<template>
	<div class="ad-box">
		<p class="ad-title">Increase your sales</p>
		<p class="ad-description">
			Discover the Proven Methods to Skyrocket Your Sales! Unleash the Potential
			of Your Business and Achieve Remarkable Growth. Whether you're a seasoned
			entrepreneur or just starting out.
		</p>
		<button class="ad-button">Learn More</button>
	</div>
</template>

<script setup></script>

<style scoped>
.ad-box {
	background: linear-gradient(
		135deg,
		#00c6ff,
		#0072ff
	); /* Gradient Background */
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
	font-size: 28px;
	font-weight: 600;
	margin-bottom: 20px;
	letter-spacing: 1px;
}

.ad-description {
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 20px;
	font-weight: 300;
}

.ad-button {
	background-color: #0066cc;
	color: white;
	border: none;
	padding: 12px 20px;
	font-size: 16px;
	border-radius: 8px;
	cursor: pointer;
	align-self: flex-start;
	transition: background-color 0.3s ease;
}

.ad-button:hover {
	background-color: #0055a5;
}
</style>
