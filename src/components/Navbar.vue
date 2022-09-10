<template>
	<!-- Top-Navbar -->
	<div
		class="
			fixed-top
			container-fluid
			d-flex
			justify-content-between
			align-items-center
			py-sm-2
			px-sm-8 px-3
			py-3
			bg-white
			shadow-sm
		"
	>
		<h1><router-link to="/post" class="bg-cover logo"></router-link></h1>
		<div
			class="
				search-box
				d-flex
				justify-content-between
				rounded-pill
				border border-light
				ms-3
				me-md-0
			"
		>
			<input
				type="text"
				name=""
				id=""
				placeholder="搜尋文章"
				class="search-input border border-0 fs-xs w-50"
			/>
			<button
				type="button"
				class="rounded-pill border border-light search-button fs-xs px-2"
			>
				搜尋
				<span class="material-icons fs-lg ms-1"> search </span>
			</button>
		</div>
		<div class="d-md-block d-none">
			<div class="d-flex align-items-center">
				<div class="me-4">
					<router-link
						to="/post"
						class="border border-primary rounded-circle p-2 home"
					>
						<span class="material-icons fs-xl"> home </span>
					</router-link>
				</div>
				<div class="dropdown h-primary-100 rounded-pill p-1">
					<button
						type="button"
						class="d-flex align-items-center border border-0 bg-transparent"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<div
							class="me-2 userAvatar rounded-circle"
							style="width: 40px; height: 40px"
						>
							<img :src="profile.avatar" alt="" 	style="width: 40px; height: 40px" class="rounded-circle" />
						</div>
						<div class="userName">{{ profile.name }}</div>
					</button>
					<ul class="dropdown-menu py-0">
						<li class="border-bottom">
							<router-link
								class="
									dropdown-item
									d-flex
									align-items-center
									text-dark-800
									py-2
								"
								to="/follow"
							>
								<span class="material-icons fs-lg me-1"> notifications </span>
								<p class="fs-xs fw-bold">追蹤名單</p>
							</router-link>
						</li>
						<li class="border-bottom">
							<router-link
								class="
									dropdown-item
									d-flex
									align-items-center
									text-dark-800
									py-2
								"
								to="/likesPost"
							>
								<span class="material-icons fs-lg me-1"> favorite </span>
								<p class="fs-xs fw-bold">喜歡貼文</p>
							</router-link>
						</li>
						<li class="border-bottom">
							<router-link
								class="
									dropdown-item
									d-flex
									align-items-center
									text-dark-800
									py-2
								"
								:to="`/profile/${profile._id}`"
							>
								<span class="material-icons fs-lg me-1"> account_circle </span>
								<p class="fs-xs fw-bold">個人貼文牆</p>
							</router-link>
						</li>
						<li class="border-bottom">
							<router-link
								class="
									dropdown-item
									d-flex
									align-items-center
									text-dark-800
									py-2
								"
								to="/updateUser"
							>
								<span class="material-icons fs-lg me-1"> edit_square </span>
								<p class="fs-xs fw-bold">編輯個人資料</p>
							</router-link>
						</li>
						<li class="" style="cursor: pointer">
							<a
								@click.prevent="logOut"
								class="
									dropdown-item
									d-flex
									align-items-center
									text-dark-800
									py-2
								"
							>
								<span class="material-icons fs-lg ms-1 me-1"> logout </span>
								<p class="fs-xs fw-bold">登出</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- Bottom-Navbar -->

	<div
		class="
			fixed-bottom
			d-md-none d-block d-flex
			justify-content-center
			w-100
			bg-white
			px-4
			rounded-top-xl
			shadow-footer
		"
	>
		<div
			class="
				navbar-footer
				d-flex
				justify-content-between
				align-items-center
				py-2
			"
		>
			<router-link
				to="/post"
				active-class="is-active"
				:class="[$route.name === 'profile' ? 'is-active' : '']"
				class="text-dark rounded-top"
			>
				<div>
					<span class="material-icons fs-3xl"> home </span>
				</div>
			</router-link>

			<router-link
				to="/likesPost"
				active-class="is-active"
				class="text-dark rounded-top"
			>
				<div>
					<span class="material-icons fs-3xl"> favorite </span>
				</div></router-link
			>

			<router-link to="/follow" active-class="is-active" class="text-dark">
				<div class="">
					<span class="material-icons fs-3xl"> notifications </span>
				</div></router-link
			>
			<router-link
				to="/list"
				active-class="is-active"
				:class="[$route.name === 'updateUser' ? 'is-active' : '']"
				class="text-dark"
			>
				<div>
					<span class="material-icons fs-3xl"> person </span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import profileMixin from "../mixins/profileMixin";

	export default {
		data() {
			return {
				link: "",
			};
		},
		mixins: [profileMixin],
		methods: {
			logOut() {
				this.$http({
					method: "GET",
					url: `${process.env.VUE_APP_API}/users/logout`,
				})
					.then((res) => {
						if (res.data.status === "success") {
							document.cookie = "jwt=";
							this.$router.push("/login");
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>