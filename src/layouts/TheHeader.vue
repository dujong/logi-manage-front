<template>
	<header class="bg-white border-bottom py-2 px-4">
		<div
			class="container-fluid d-flex align-items-center justify-content-between"
		>
			<!-- 좌측: 로고 -->
			<div class="d-flex align-items-center gap-2">
				<img src="/src/assets/logo.png" alt="logo" width="28" height="28" />
				<span class="fw-bold fs-5">척척물류</span>
			</div>

			<!-- 중앙: 검색창 -->
			<div class="flex-grow-1 mx-4" style="max-width: 500px">
				<div class="input-group">
					<input
						type="text"
						class="form-control rounded-start-pill"
						placeholder="Search product"
					/>
					<span
						class="input-group-text bg-white border-start-0 rounded-end-pill"
					>
						<i class="fas fa-search text-muted"></i>
					</span>
				</div>
			</div>

			<!-- 우측: 알림/메일 + 사용자 정보 -->
			<div class="d-flex align-items-center gap-3">
				<!-- 메일 -->
				<div class="position-relative">
					<img src="/src/assets/mail.svg" alt="mail" class="icon-style" />
					<span
						class="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill"
					>
						2
					</span>
				</div>

				<!-- 알림 -->
				<div class="position-relative">
					<img
						src="/src/assets/notifications.svg"
						alt="notifications"
						class="icon-style"
					/>
					<span
						class="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill"
					>
						4
					</span>
				</div>

				<!-- 유저 정보 -->
				<div class="d-flex align-items-center">
					<img
						src="https://via.placeholder.com/32"
						alt="profile"
						class="rounded-circle me-2"
						width="32"
						height="32"
					/>
					<div class="d-flex flex-column lh-sm">
						<span class="fw-semibold text-dark small">Guy Hawkins</span>
						<span class="text-muted small">Admin</span>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup></script>

<style>
.icon-style {
	width: 24px;
	height: 24px;
	cursor: pointer;
}
</style>
