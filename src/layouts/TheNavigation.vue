<template>
	<div class="sidenav">
		<!-- <a href="#home">홈</a>
		<a href="#services">서비스</a>
		<a href="#clients">클라이언트</a>
		<a href="#contact">연락처</a> -->
	</div>
</template>

<script>
export default {
	name: 'TheNavigation',
};
</script>

<style scoped>
/* 사이드 네비게이션 스타일 */
.sidenav {
	width: 250px;
	height: 100%;
	background-color: #fff;
	padding-top: 20px;
	position: fixed;
	top: 0;
	left: 0;
}

.sidenav a {
	display: block;
	padding: 15px 25px;
	color: white;
	text-decoration: none;
	font-size: 18px;
	transition: background-color 0.3s;
}

.sidenav a:hover {
	background-color: #575757;
}
</style>
