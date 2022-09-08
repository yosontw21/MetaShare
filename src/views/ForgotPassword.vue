<template>
	<Loading :active="isLoading"></Loading>
	<div class="container-fuild bg-light">
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
				<div class="mb-6 d-sm-flex align-items-sm-center d-block">
					<h3
						class="
							d-flex
							align-items-center
							fw-bold
							fs-3xl fs-md-xl
							text-primary
							me-3
						"
					>
						重設密碼
					</h3>
					<span class="fs-2xl text-secondary fw-bold fs-md-xl"
						>FORGOT PASSWORD</span
					>
				</div>
				<div class="mb-sm-8 mb-6">
					<p class="fs-md">
						請輸入您加入時使用的電子郵件，我們將會向您發送重置密碼的驗證碼。
					</p>
				</div>

				<div class="mb-sm-8 mb-6">
					<label for="Email" class="text-dark fw-bold fs-md mb-1">Email</label>
					<div class="d-flex align-items-center">
						<input
							type="email"
							placeholder="請輸入 Email"
							class="form-control ps-4 py-2 fs-md w-100"
							v-model="email"
							id="Email"
						/>
					</div>
				</div>
				<div class="mb-6">
					<button
						type="button"
						class="w-100 btn btn-primary py-2 fs-xl fs-md-lg fw-bold"
						@click="resetPassword"
					>
						取得驗證碼
					</button>
				</div>

				<div
					class="
						d-flex
						align-items-center
						justify-content-between
						fs-xs
						fw-bold
					"
				>
					<div class="">
						<router-link to="/login" class="text-primary">返回登入</router-link>
					</div>
					<div class="">
						<p class="text-dark me-2">還沒有帳號嗎?</p>
						<router-link to="/signup" class="text-primary"
							>前往註冊</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				email: "",
				isLoading: false,
			};
		},
		methods: {
			resetPassword() {
				this.isLoading = true;
				this.$http({
					method: "POST",
					url: `${process.env.VUE_APP_API}/users/forgotPassword`,
					data: {
						email: this.email,
					},
				})
					.then((res) => {
						this.isLoading = false;
						alert(res.data.data);
					})
					.catch((err) => {
						this.isLoading = false;
						alert(err.response.data.message);
					});
			},
		},
	};
</script>