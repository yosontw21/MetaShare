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
						<a href="" class="text-dark fs-xs"
							>正在追蹤
							<span class="fs-sm fw-bold text-primary">{{
								following.length
							}}</span>
							人
						</a>
						<div class="m-border"></div>
						<a href="" class="text-dark fs-xs">
							<span class="fs-sm fw-bold text-primary">{{
								followers.length
							}}</span>
							位追蹤者</a
						>
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
</template>

<script>
	import Navbar from "../components/Navbar.vue";
	import profileMixin from "../mixins/profileMixin";
	import otherProfileMixin from "../mixins/otherProfileMixin";
	import followListMixin from "@/mixins/followListMixin";

	export default {
		data() {
			return {
				isFollow: false,
			};
		},
		components: {
			Navbar,
		},

		mixins: [otherProfileMixin, profileMixin, followListMixin],
	};
</script>