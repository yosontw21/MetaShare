<template>
	<div class="w-100 bg-light h-100 pb-md-10 pb-19">
		<div class="container pt-20 d-flex">
			<ul class="rounded-2 shadow-lg w-100 bg-white p-2">
				<li class="border-bottom py-1">
					<router-link :to="`/profile/${profile._id}`" class="d-flex">
						<div class="rounded-circle me-2">
							<img
								class="rounded-circle"
								:src="profile.avatar"
								alt=""
								style="width: 40px; height: 40px"
							/>
						</div>
						<div class="">
							<p class="text-dark-800 fs-xs fw-bold mb-0">{{ profile.name }}</p>
							<p class="text-black-50 fs-2xs">查看個人貼文牆</p>
						</div>
					</router-link>
				</li>
				<li class="border-bottom py-3">
					<router-link
						to="/updateUser"
						class="fw-bold fs-xs d-block text-dark-800"
					>
						<span class="material-icons fs-lg me-1"> edit_square </span>
						編輯個人資料</router-link
					>
				</li>
				<li class="border-bottom py-3" style="cursor: pointer">
					<a
						@click.prevent="logOut"
						class="fw-bold fs-xs d-block text-dark-800"
					>
						<span class="material-icons fs-lg ms-1 me-1"> logout </span>
						登出</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>



<script>
	import profileMixin from "../mixins/profileMixin";

	export default {
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
