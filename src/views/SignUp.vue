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
				<div class="mb-6 d-flex align-items-center">
					<h3
						class="
							d-flex
							align-items-center
							fw-bold
							fs-3xl fs-md-2xl
							text-primary
							me-3
							fs-md-xl
						"
					>
						註冊
					</h3>
					<span class="fs-2xl text-secondary fw-bold fs-md-xl">SIGN UP</span>
				</div>
				<div class="align-items-center row mb-4">
					<div class="col-sm-6 col-12 mb-3 mb-sm-0 px-1">
						<button
							type="button"
							class="
								btn-third
								rounded-1
								d-flex
								align-items-center
								w-100
								justify-content-center
							"
						>
							<img
								src="../../src/assets/images/google.png"
								alt=""
								class="third-logo"
							/>
							<p class="fw-bold text-primary">使用 Google 註冊</p>
						</button>
					</div>
					<div class="col-sm-6 col-12 mb-3 mb-sm-0 px-1">
						<button
							type="button"
							class="
								btn-third
								rounded-1
								d-flex
								align-items-center
								w-100
								justify-content-center
							"
						>
							<img
								src="../../src/assets/images/facebook.png"
								alt=""
								class="third-logo"
							/>
							<p class="fw-bold text-primary">使用 Facebook 註冊</p>
						</button>
					</div>
				</div>
				<div class="d-flex align-items-center mb-3">
					<span class="w-100 t-border"></span>
					<p class="fs-xs fw-bold mx-2 text-black-50">Or</p>
					<span class="w-100 t-border"></span>
				</div>
				<div class="mb-sm-8 mb-6">
					<label for="nickname" class="text-dark fw-bold fs-md mb-1"
						>暱稱</label
					>
					<div class="d-flex align-items-center">
						<input
							type="text"
							placeholder="請輸入 暱稱"
							class="form-control ps-4 py-2 fs-md w-100"
							id="nickname"
							v-model="user.name"
							@keydown.enter="signUp"
						/>
					</div>
				</div>
				<div class="mb-sm-8 mb-6">
					<label for="Email" class="text-dark fw-bold fs-md mb-1">Email</label>
					<div class="d-flex align-items-center">
						<input
							type="email"
							placeholder="請輸入 Email"
							class="form-control ps-4 py-2 fs-md w-100"
							id="Email"
							v-model="user.email"
							@keydown.enter="signUp"
						/>
					</div>
				</div>
				<div class="mb-sm-8 mb-6">
					<label for="password" class="text-dark fw-bold fs-md mb-1"
						>密碼</label
					>
					<div class="d-flex align-items-center">
						<input
							type="password"
							placeholder="請輸入密碼"
							class="form-control ps-4 py-2 fs-md w-100"
							id="password"
							v-model="user.password"
							@keydown.enter="signUp"
						/>
					</div>
				</div>
				<div class="mb-8">
					<label for="passwordConfirm" class="text-dark fw-bold fs-md mb-1"
						>確認密碼</label
					>
					<div class="d-flex align-items-center">
						<input
							type="password"
							placeholder="請輸入確認密碼"
							class="form-control ps-4 py-2 fs-md w-100"
							id="passwordConfirm"
							v-model="user.passwordConfirm"
							@keydown.enter="signUp"
						/>
					</div>
				</div>
				<div class="mb-6">
					<button
						type="button"
						class="signupBtn w-100 btn btn-primary fs-xl fs-md-lg fw-bold"
						@click="signUp"
					>
						註冊
					</button>
				</div>
				<div
					class="d-flex align-items-center justify-content-center fs-xs fw-bold"
				>
					<p class="text-dark me-2">已經有帳號了嗎?</p>
					<router-link to="/login" class="text-primary">前往登入</router-link>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				user: {
					name: "",
					email: "",
					password: "",
					passwordConfirm: "",
				},
				isLoading: false,
			};
		},
		methods: {
			signUp() {
				this.isLoading = true;
				const api = `${process.env.VUE_APP_API}/users/signup`;
				this.$http

					.post(api, this.user)
					.then((res) => {
						this.isLoading = false;
						const { token, expires } = res.data.data;
						document.cookie = `jwt=${token}; expries=${new Date(expires)}`;
						if (res.data.status === "success") {
							this.$router.push("/post");
						}
					})
					.catch((err) => {
						this.isLoading = false;
						alert(err.response.data.message);
						console.log(err.response);
					});
			},
		},
	};
</script>