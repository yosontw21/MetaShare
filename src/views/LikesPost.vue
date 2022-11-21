<template>
	<Loading :active="isLoading"></Loading>
	<div class="w-100 ms-md-9 ms-0 container">
		<div class="w-100 py-3 px-4 rounded-2 shadow-lg bg-white mb-6">
			<p class="text-primary fw-bold fs-lg mb-4">喜歡的貼文</p>
			<div class="w-100 t-border d-block mb-5"></div>
			<div
				class="
					fs-xs
					text-dark-800
					d-flex
					align-items-center
					justify-content-center
					py-10
				"
				v-if="likesPost.length <= 0"
			>
				還沒有喜歡的貼文喔
			</div>
			<div
				class="w-100 border-bottom mb-5"
				v-else
				v-for="item in likesPost"
				:key="item.id"
			>
				<div class="d-lg-flex align-items-center d-block pb-5">
					<div class="d-flex align-items-center w-100 mb-lg-0 mb-3">
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

							<p class="fs-xs text-black-50 text-nowrap fs-md-2xs">
								發文時間: {{ day(item.createdAt) }}
							</p>
						</div>
					</div>

					<div class="d-flex">
						<button
							type="button"
							@click="delLikesPost(item.id)"
							class="btn--danger text-nowrap me-3"
						>
							<span class="material-icons fs-md-lg fs-xl"> heart_broken </span>
							收回喜歡
						</button>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { day, dayToNow } from "../utils/day";

	export default {
		data() {
			return {
				likesPost: [],
				isLoading: false,
				day,
				dayToNow,
			};
		},
		methods: {
			getLikesPost() {
				this.isLoading = true;
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "GET",
					url: `${process.env.VUE_APP_API}/users/getLikesList`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						this.isLoading = false;
						this.likesPost = res.data.data;
					})
					.catch((err) => {
						console.log(err);
					});
			},
			delLikesPost(id) {
				this.isLoading = true;
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "DELETE",
					url: `${process.env.VUE_APP_API}/post/${id}/likes`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						if (res.data.status === "success") {
							this.isLoading = false;
							const index = this.likesPost.findIndex((item) => item.id === id);
							this.likesPost.splice(index, 1);
							this.getLikesPost();
						}
					})
					.catch((err) => {
						this.isLoading = false;
						console.log(err);
					});
			},
		},
		created() {
			this.getLikesPost();
		},
	};
</script>
