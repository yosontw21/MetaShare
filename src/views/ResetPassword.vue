<template>
	<div class="container-fuild bg-light">
		<Loading :active="isLoading"></Loading>
		<div class="p-6">
			<h1 class="logo-lg bg-cover"></h1>
		</div>
		<div class="row align-items-center">
			<div
				class="
					col-12 col-xl-5 col-xxl-5
					offset-xxl-1
					mb-10 mb-xl-0
					d-md-block d-none
				"
			>
				<img
					src="../../src/assets/images/banner.svg"
					alt=""
					class="m-auto banner bg-cover"
				/>
			</div>

			<div
				class="
					loginCard
					mb-10
					col-12 col-xxl-5 col-xl-6
					bg-white
					shadow-lg
					border-1
					rounded-2
					px-sm-12
					py-sm-8
					px-6
					py-4
				"
			>
				<div class="mb-6 d-flex align-items-center">
					<h3
						class="
							d-flex
							align-items-center
							fw-bold
							fs-3xl
							text-primary
							me-3
							fs-md-xl
						"
					>
						重置密碼
					</h3>
					<span class="fs-2xl text-secondary fw-bold fs-md-xl"
						>RESET PASSWORD</span
					>
				</div>

				<div class="mb-sm-8 mb-6">
					<label for="password" class="text-dark fw-bold fs-md mb-1"
						>新密碼</label
					>
					<div class="d-flex align-items-center">
						<input
							type="password"
							placeholder="請輸入新密碼"
							class="form-control ps-4 py-2 fs-md w-100"
							id="password"
							v-model="newPassword.password"
						/>
					</div>
				</div>
				<div class="mb-8">
					<label for="passwordConfirm" class="text-dark fw-bold fs-md mb-1"
						>確認新密碼</label
					>
					<div class="d-flex align-items-center">
						<input
							type="password"
							placeholder="確認新密碼"
							class="form-control ps-4 py-2 fs-md w-100"
							id="passwordConfirm"
							v-model="newPassword.passwordConfirm"
						/>
					</div>
				</div>
				<div class="mb-6">
					<button
						type="button"
						class="loginBtn w-100 btn btn-primary fs-md-lg fs-xl fw-bold"
						@click="resetPassword"
						@keyup.enter="resetPassword"
					>
						重設密碼
					</button>
				</div>

				<router-link to="/login" class="fs-sm text-primary fw-bold mt-1"
					>返回登入</router-link
				>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				isLoading: false,
				newPassword: {
					password: "",
					passwordConfirm: "",
				},
			};
		},
		props: ["token"],
		methods: {
			resetPassword() {
				this.isLoading = true;
				const token = this.token;
				this.$http({
					method: "PATCH",
					url: `${process.env.VUE_APP_API}/users/resetPassword/${token}`,
					data: this.newPassword,
				})
					.then((res) => {
						this.isLoading = false;
						if (res.data.status === "success") {
							alert("更新密碼成功，請用新密碼登入");
							this.$router.push("/login");
						}
					})
					.catch((err) => {
						this.isLoading = false;
						if (err.response.data.error.status === "Error") {
							alert(err.response.data.message);
						}
					});
			},
		},
	};
</script>