<template>
	<Loading :active="isLoading"></Loading>
	<div
		class="
			bg-white
			d-flex
			justify-content-center
			align-items-center
			py-6
			shadow-lg
			rounded-2
		"
		v-if="personPosts.length <= 0"
	>
		<div class="" v-show="personProfile._id === profile._id">
			<span class="fs-2xs me-3" style="color: #a5a5a5"
				>沒有相關貼文，快去新增一則貼文吧！</span
			>
			<button type="button" class="btn btn-primary" @click="openPostModal">
				新增貼文
			</button>
		</div>
		<div class="" v-show="personProfile._id !== profile._id">
			<span class="fs-2xs me-3" style="color: #a5a5a5">沒有相關貼文喔</span>
		</div>
	</div>
	<div class="w-100 mb-6" v-else v-for="item in personPosts" :key="item._id">
		<div class="w-100 py-3 px-6 rounded-2 shadow-lg bg-white mb-6">
			<div class="border-bottom pb-3 mb-2">
				<div class="d-flex align-items-center justify-content-between">
					<div class="d-flex align-items-center">
						<div class="me-3">
							<div class="rounded-circle" style="width: 56px; height: 56px">
								<img
									:src="item.user.avatar"
									style="width: 56px; height: 56px"
									alt=""
									class="rounded-circle"
								/>
							</div>
						</div>
						<div class="">
							<router-link :to="`/profile/${item.user._id}`">{{
								item.user.name
							}}</router-link>
							<p>{{ day(item.createdAt) }}</p>
						</div>
					</div>
					<div class="dropdown" v-show="profile._id === item.user._id">
						<a
							class="post-edit rounded-2"
							href="#"
							role="button"
							id="item.id"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<span class="material-icons"> more_horiz </span>
						</a>

						<ul class="dropdown-menu" aria-labelledby="item.id">
							<li>
								<button
									type="button"
									class="dropdown-item"
									@click="openPostModal(false, item)"
								>
									編輯
								</button>
							</li>

							<li>
								<button
									type="button"
									class="dropdown-item"
									@click="delPost(item.id)"
								>
									刪除
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="border-bottom pb-3 mb-2">
				<p>{{ item.content }}</p>
				<div class="rounded-3 mt-3" style="max-height: 740px" v-if="item.image">
					<img
						:src="item.image"
						class="w-100 h-100 rounded-3"
						alt=""
						style="max-height: 740px"
					/>
				</div>
			</div>
			<div
				class="
					border-bottom
					pb-2
					mb-3
					d-flex
					align-items-center
					justify-content-center
				"
			>
				<button
					type="button"
					class="
						border-0
						bg-white
						w-100
						d-flex
						justify-content-center
						align-items-center
					"
					@click="likesPost(item)"
				>
					<div
						class="d-flex align-items-center"
						v-if="item.likes.find((item) => item._id === this.profile._id)"
					>
						<span class="material-icons fs-4xl me-2" style="color: #de5d4b">
							favorite
						</span>
						<span class="">喜歡</span>
					</div>
					<div class="d-flex align-items-center" style="color: #b9b9b9" v-else>
						<span class="material-icons fs-4xl me-2"> favorite_border</span>
						<span class="">喜歡</span>
					</div>
				</button>
			</div>
			<div class="border-bottom pb-2 mb-3 d-flex">
				<div class="me-3">
					<div class="">
						<button type="button" 						
						data-bs-toggle="modal"
						:data-bs-target="'#likesModal' + item.id" 
						class="border-0 bg-white d-flex"
						>
							<div
								class="fs-xs"
								v-if="item.likes.length === 0"
								style="color: #b9b9b9"
							>
								<span class="material-icons fs-lg me-2"> favorite_border </span>
								<span class="text-nowrap">成為第一個喜歡的朋友</span>
							</div>
							<div class="fs-xs" v-else>
								<span class="material-icons fs-lg me-2" style="color: #de5d4b">
									favorite
								</span>
								<span>{{ item.likes.length }}個人喜歡</span>
							</div>
						</button>
					</div>
				</div>
				<div class="d-flex align-items-center">
					<button type="button" class="border-0 bg-white d-flex">
						<div
							v-if="item.comments.length === 0"
							class="fs-xs text-nowrap"
							style="color: #b9b9b9"
						>
							<span class="material-icons fs-lg me-2">
								chat_bubble_outline
							</span>
							<span class="text-nowrap">尚無留言</span>
						</div>

						<div v-else class="fs-xs text-nowrap">
							<span class="material-icons fs-lg me-2 text-primary">
								comment
							</span>
							<span>{{ item.comments.length }}個人留言</span>
						</div>
					</button>
				</div>
			</div>
			<div
				class="border-bottom pb-3 mb-3"
				v-for="commentsItem in item.comments"
				:key="commentsItem._id"
			>
				<div class="d-flex">
					<div class="rounded-circle me-3" style="width: 36px; height: 36px">
						<img
							:src="commentsItem.userId.avatar"
							alt=""
							style="width: 36px; height: 36px"
							class="rounded-circle"
						/>
					</div>
					<div class="py-2 px-3 rounded-3" style="background-color: #f4f4f4">
						<div class="d-flex">
							<router-link
								:to="`/profile/${commentsItem.userId._id}`"
								class="me-3"
								>{{ commentsItem.userId.name }}</router-link
							>
							<p class="text-black-50 fs-xs">
								{{ day(commentsItem.createdAt) }}
							</p>
						</div>
						<p>{{ commentsItem.comment }}</p>
					</div>
				</div>
			</div>

			<div class="d-flex align-items-center w-100">
				<div class="me-3">
					<div class="rounded-circle" style="height: 40px; width: 40px">
						<img
							:src="profile.avatar"
							style="height: 40px; width: 40px"
							alt=""
							class="rounded-circle"
						/>
					</div>
				</div>
				<div
					class="
						comments-box
						d-flex
						justify-content-between
						rounded-pill
						border border-light
						w-100
					"
				>
					<input
						type="text"
						placeholder="留言....."
						class="search-input border border-0 w-100"
						@input="comments.comment = $event.target.value"
						@keydown.enter="createComment(item.id)"
						ref="commentValue"
					/>
					<button
						@click="createComment(item.id)"
						type="button"
						class="
							text-nowrap
							rounded-pill
							border-0
							btn btn-primary
							fs-md fs-md-sm
							py-lg-1
							px-lg-10 px-2
							py-0
							fw-bold
						"
					>
						留言
						<div
							class="spinner-border spinner-border-sm mt-1 ms-2"
							v-if="this.status.loadingItem === item.id"
							role="status"
						>
							<span class="visually-hidden">Loading...</span>
						</div>
					</button>
				</div>
			</div>
		</div>
				<div
			class="modal fade"
			:id="'likesModal' + item.id"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fw-bold fs-lg text-primary text-center">
							說讚的用戶
						</h1>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="exampleModalLabel"
							aria-label="Close"
						></button>
					</div>
					<div class="px-5 py-2" v-for="likesPost in item.likes">
						<div
							class="d-flex align-items-center"
						>
							<div
								class="rounded-circle me-3"
								style="width: 36px; height: 36px"
							>
								<img
									:src="likesPost.avatar"
									style="width: 36px; height: 36px"
									alt=""
									class="rounded-circle"
								/>
							</div>
							<p class="" :key="likesPost.id">{{ likesPost.name }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<createPostModal
		ref="createPostModal"
		:post="tempPost"
		@create-post="createPost"
	></createPostModal>
</template>



<script>
	import { day, dayToNow } from "../utils/day";
	import profileMixin from "../mixins/profileMixin";
	import createPostModal from "../components/CreatePostModal.vue";
	import personPostsMixin from "../mixins/personPostsMixin";
	import createPostMixin from "../mixins/createPostMixin";
	import otherProfileMixin from "../mixins/otherProfileMixin";
	import openModalMixin from "../mixins/openModalMixin";
	import delPostMixin from "../mixins/delPostMixin";

	export default {
		data() {
			return {
				comments: {},
				profile: [],

				dayToNow,
				day,
				isLoading: false,
				status: {
					loadingItem: "",
				},
			};
		},
		components: {
			createPostModal,
		},
		mixins: [
			profileMixin,
			personPostsMixin,
			createPostMixin,
			otherProfileMixin,
			openModalMixin,
			delPostMixin,
		],
		methods: {
			createComment(id) {
				const token = document.cookie.split(`jwt=`).pop();
				this.status.loadingItem = id;
				this.$http({
					method: "POST",
					url: `${process.env.VUE_APP_API}/post/${id}/comments`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
					data: this.comments,
				})
					.then((res) => {
						console.log(res);

						this.$refs.commentValue.forEach((item) => {
							if (res.data.status === "success") {
								item.value == "";
							}
						});

						this.status.loadingItem = "";
						this.getPersonPosts();
					})
					.catch((err) => {
						this.isLoading = false;
						console.log(err);
						if (err.response.data.status === "Error") {
							alert("請輸入留言內容");
							this.status.loadingItem = false;
						}
					});
			},
			likesPost(item) {
				const isLike = item.likes.find((item) => item._id === this.profile._id);
				if (isLike) {
					this.delLikesPost(item);
					return;
				}
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "POST",
					url: `${process.env.VUE_APP_API}/post/${item._id}/likes`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						this.getPersonPosts();
					})
					.catch((err) => {
						console.log(err);
					});
			},
			delLikesPost(item) {
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "DELETE",
					url: `${process.env.VUE_APP_API}/post/${item._id}/likes`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						console.log(res);
						this.getPersonPosts();
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
		created() {
			this.getPersonPosts();
		},
	};
</script>
