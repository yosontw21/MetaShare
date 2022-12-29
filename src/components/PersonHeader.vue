<template>
	<div class="container-fluid pt-20 shadow-lg rounded-bottom-xl">
		<div
			class="
				container
				flex-column
				align-items-center
				flex-md-row
				d-flex
				justify-content-md-between
				align-items-md-center
				pb-md-4 pb-8
			"
		>
			<div class="d-md-flex align-items-md-center">
				<div
					class="
						rounded-circle
						me-md-7 me-0
						d-flex
						justify-content-center
						d-md-block
					"
				>
					<img
						alt=""
						class="rounded-circle border border-2 border-primary"
						style="width: 136px; height: 136px"
						:src="profile.avatar"
					/>
				</div>
				<div class="mt-md-10 mt-5">
					<p class="fs-2xl fw-bold text-center text-md-start">
						{{ profile.name }}
					</p>
					<div class="d-flex">
						<button
							type="button"
							class="text-dark fs-xs btn-none"
							data-bs-toggle="modal"
							data-bs-target="#userFollowing"
						>
							正在追蹤
							<span class="fs-sm fw-bold text-primary">{{
								following.length
							}}</span>
							人
						</button>
						<div class="m-border"></div>
						<button
							type="button"
							class="text-dark fs-xs btn-none"
							data-bs-toggle="modal"
							data-bs-target="#userFollowers"
						>
							<span class="fs-sm fw-bold text-primary">{{
								followersList.length
							}}</span>
							位追蹤者
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="modal fade"
		id="userFollowing"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5
						class="modal-title text-primary fw-bold fs-xl"
						id="exampleModalLabel"
					>
						追蹤名單
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div
						class="
							fs-xs
							text-dark-800
							d-flex
							align-items-center
							justify-content-center
							py-10
						"
						v-if="followingList.length <= 0"
					>
						還沒有追蹤任何人喔
					</div>
					<div
						class="w-100 border-bottom mb-3"
						v-for="item in followingList"
						:key="item.user._id"
					>
						<div class="d-flex align-items-center pb-3">
							<div class="d-flex align-items-center w-100">
								<div class="rounded-circle me-2">
									<img
										:src="item.user.avatar"
										alt=""
										class="rounded-circle avatar"
									/>
								</div>
								<div class="">
									<router-link
										:to="`/profile/${item.user._id}`"
										class="text-dark fw-bold fs-lg fs-md-sm"
										>{{ item.user.name }}</router-link
									>
								</div>
							</div>

							<div class="">
								<button
									class="btn--primary text-nowrap"
									@click="unfollowUsers(item.user._id)"
								>
									取消追蹤
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="modal fade"
		id="userFollowers"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h5
						class="modal-title text-primary fw-bold fs-xl"
						id="exampleModalLabel"
					>
						粉絲名單
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div
						class="
							fs-xs
							text-dark-800
							d-flex
							align-items-center
							justify-content-center
							py-10
						"
						v-if="followersList.length <= 0"
					>
						還沒有粉絲喔
					</div>
					<div
						class="w-100 border-bottom mb-3"
						v-for="item in followersList"
						:key="item.user._id"
					>
						<div class="d-flex align-items-center pb-3">
							<div class="d-flex align-items-center w-100">
								<div class="rounded-circle me-2">
									<img
										:src="item.user.avatar"
										alt=""
										class="rounded-circle avatar"
									/>
								</div>
								<div class="">
									<router-link
										:to="`/profile/${item.user._id}`"
										class="text-dark fw-bold fs-lg fs-md-sm"
										>{{ item.user.name }}</router-link
									>
								</div>
							</div>

							<div class="">
								<button
									class="btn--primary text-nowrap"
									@click="unfollowersUser(item.user._id)"
								>
									取消關注
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import profileMixin from "../mixins/profileMixin";
	import followListMixin from "@/mixins/followListMixin";
	import followersListMixin from "@/mixins/followersListMixin";
	export default {
		mixins: [profileMixin, followListMixin, followersListMixin],
		methods: {
			unfollowersUser(id) {
				this.isLoading = true;
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "DELETE",
					url: `${process.env.VUE_APP_API}/users/${id}/followers`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						if (res.data.status === "success") {
							this.isLoading = false;
							alert("您已取消關注成功");
							this.getFollowers();
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
			unfollowUsers(id) {
				this.isLoading = true;
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "DELETE",
					url: `${process.env.VUE_APP_API}/users/${id}/following`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						if (res.data.status === "success") {
							this.isLoading = false;
							alert("您已取消追蹤成功");
							this.getFollow();
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>