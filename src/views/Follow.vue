<template>
	<Loading :active="isLoading"></Loading>
	<div class="w-100 ms-md-9 ms-0 container">
		<div class="w-100 py-3 px-4 rounded-2 shadow-lg bg-white mb-6">
			<p class="text-primary fw-bold fs-lg mb-4" >追蹤名單</p>
			<p class="text-primary fw-bold fs-lg mb-4">已追蹤 {{followingList.length}} 人</p>
			
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
				v-if="followingList?.length <= 0"
			>
				還沒有追蹤任何人喔
			</div>
			<div
				class="w-100 border-bottom mb-5"
				v-for="item in followingList"
				:key="item.user._id"
			>
				<div class="d-flex align-items-center pb-5">
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
							<p class="fs-xs fs-md-2xs">
								你已追蹤<span
									class="fw-bold fs-sm fs-md-xs text-primary ms-1"
									style="line-height: 0"
								>
									{{ dayToNow(item.createdAt) }}</span
								>
							</p>
							<p class="fs-xs fs-md-2xs text-black-50 text-nowrap">
								追蹤時間: {{ day(item.createdAt) }}
							</p>
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
</template>




<script>
	import { day, dayToNow } from "../utils/day";
	import followingList from "../mixins/followListMixin";

	export default {
		data() {
			return {
				day,
				dayToNow,
				isLoading: false,
			};
		},
		mixins: [followingList],
		methods: {
			unfollowUser(id) {
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
