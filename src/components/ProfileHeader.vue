<template>
	<Navbar></Navbar>
	<div class="container-fluid pt-20 shadow-lg rounded-bottom-xl">
		<Loading :active="isLoading"></Loading>
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
						:src="personProfile.avatar"
					/>
				</div>
				<div class="mt-md-10 mt-5">
					<p class="fs-2xl fw-bold text-center text-md-start">
						{{ personProfile.name }}
					</p>
					<div class="d-flex">
						<button
							type="button"
							class="text-dark fs-xs btn-none"
							data-bs-toggle="modal"
							data-bs-target="#userFollowing"
							v-if="profile._id === personProfile._id"
						>
							正在追蹤
							<span class="fs-sm fw-bold text-primary">{{
								followingList.length
							}}</span>
							人
						</button>

						<button
							type="button"
							class="text-dark fs-xs btn-none"
							data-bs-toggle="modal"
							data-bs-target="#otherUserFollowing"
							v-if="profile._id !== personProfile._id"
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
							v-if="profile._id === personProfile._id"
						>
							<span class="fs-sm fw-bold text-primary">{{
								followersList.length
							}}</span>
							位追蹤者
						</button>
						<button
							type="button"
							class="text-dark fs-xs btn-none"
							data-bs-toggle="modal"
							data-bs-target="#otherUserFollowers"
							v-if="profile._id !== personProfile._id"
						>
							<span class="fs-sm fw-bold text-primary">{{
								followers.length
							}}</span>
							位追蹤者
						</button>
					</div>
				</div>
			</div>

			<div class="" v-if="isFollow === -1">
				<div class="mt-8" v-if="profile._id !== personProfile._id">
					<button type="button" @click="followUser" class="btn--primary">
						<span class="material-icons fs-lg me-1"> notifications </span>
						追蹤
					</button>
				</div>
			</div>
			<div class="" v-else>
				<div class="mt-8" v-if="profile._id !== personProfile._id">
					<button type="button" class="btn--primary" @click="unfollowUser">
						<span class="material-icons fs-lg me-1"> notifications_off </span>

						取消追蹤
					</button>
				</div>
			</div>
			<div class="" v-if="profile._id === personProfile._id">
				<div class="mt-8">
					<router-link to="/updateUser" class="btn--primary">
						<span class="material-icons fs-lg me-1"> edit_square </span>
						編輯個人資料
					</router-link>
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
						v-if="followingList <= 0"
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
									@click="unfollowUser(item.user._id)"
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
						v-if="followersList <= 0"
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

	<div
		class="modal fade"
		id="otherUserFollowing"
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
						v-if="following <= 0"
					>
						他目前還沒有追蹤任何人喔
					</div>
					<div
						class="w-100 border-bottom mb-3"
						v-for="item in following"
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="modal fade"
		id="otherUserFollowers"
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
						v-if="followers <= 0"
					>
						他目前還還沒有粉絲喔
					</div>
					<div
						class="w-100 border-bottom mb-3"
						v-for="item in followers"
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue";
	import profileMixin from "../mixins/profileMixin";
	import otherProfileMixin from "../mixins/otherProfileMixin";
	import followListMixin from "@/mixins/followListMixin";
	import followersListMixin from "@/mixins/followersListMixin";

	export default {
		data() {
			return {
				isFollow: false,
			};
		},
		components: {
			Navbar,
		},

		mixins: [
			otherProfileMixin,
			profileMixin,
			followListMixin,
			followersListMixin,
		],
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
		},
	};
</script>