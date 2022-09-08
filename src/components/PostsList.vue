<template>
	<div class="w-100 mb-6" v-for="(post, i) in posts" :key="post.id">
		<Loading :active="isLoading"></Loading>
		<div class="w-100 py-3 px-6 rounded-2 shadow-lg bg-white mb-6">
			<div class="border-bottom pb-3 mb-2">
				<div class="d-flex align-items-center justify-content-between">
					<div class="d-flex align-items-center">
						<div class="me-3">
							<div class="rounded-circle">
								<img
									:src="post.user.avatar"
									alt=""
									class="rounded-circle avatar-md"
									style="width: 56px; height: 56px"
								/>
							</div>
						</div>
						<div class="">
							<router-link :to="`/profile/${post.user._id}`">{{
								post.user.name
							}}</router-link>
							<p>{{ day(post.createdAt) }}</p>
						</div>
					</div>

					<div class="dropdown" v-show="profile._id === post.user._id">
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
									@click="openPostModal(false, post)"
								>
									編輯
								</button>
							</li>

							<li>
								<button
									type="button"
									class="dropdown-item"
									@click="delPost(post.id)"
								>
									刪除
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="border-bottom pb-3 mb-2">
				<p>{{ post.content }}</p>
			</div>

			<div class="border-bottom pb-2 mb-3 d-flex">
				<div class="me-3">
					<div class="">
						<button
							type="button"
							class="border-0 bg-white d-flex"
							@click="likesPost(post)"
						>
							<div
								class="fs-xs"
								v-if="post.likes.length === 0"
								style="color: #b9b9b9"
							>
								<span class="material-icons fs-lg me-2"> favorite_border</span>
								<span class="text-nowrap">成為第一個喜歡朋友</span>
							</div>
							<div class="fs-xs" v-else>
								<span class="material-icons fs-lg me-2" style="color: #de5d4b">
									favorite
								</span>
								<span>{{ post.likes.length }}個人喜歡</span>
							</div>
						</button>
					</div>
				</div>

				<div class="d-flex align-items-center">
					<button type="button" class="border-0 bg-white d-flex">
						<div
							v-if="post.comments.length === 0"
							class="fs-xs"
							style="color: #b9b9b9"
						>
							<span class="material-icons fs-lg me-2">
								chat_bubble_outline
							</span>
							<span class="text-nowrap">尚無留言</span>
						</div>

						<div v-else class="fs-xs">
							<span class="material-icons fs-lg me-2 text-primary">
								comment
							</span>
							<span>{{ post.comments.length }}個人留言</span>
						</div>
					</button>
				</div>
			</div>
			<div
				class="border-bottom pb-3 mb-3"
				v-for="commentsItem in post.comments"
				:key="commentsItem._id"
			>
				<div class="d-flex">
					<div class="rounded-circle me-3" style="width: 36px; height: 36px">
						<img
							:src="commentsItem.userId.avatar"
							alt=""
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
						<img :src="profile.avatar" alt="" class="rounded-circle" />
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
						ref="commentValue"
						@keydown.enter="createComment(post.id)"
					/>
					<button
						@click="createComment(post.id)"
						type="button"
						class="
							text-nowrap
							rounded-pill
							border-0
							search-button
							fs-md
							py-lg-1
							px-lg-10 px-2
							py-0
							fw-bold
						"
					>
						留言
						<div
							class="spinner-border spinner-border-sm mt-1 ms-2"
							v-if="this.status.loadingItem === post.id"
							role="status"
						>
							<span class="visually-hidden">Loading...</span>
						</div>
					</button>
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
	import postsMixin from "../mixins/postsMixin";
	import createPostModal from "../components/CreatePostModal.vue";
	import createPostMixin from "../mixins/createPostMixin";
	import openModalMixin from "../mixins/openModalMixin";
	import delPostMixin from "../mixins/delPostMixin";

	export default {
		mixins: [
			profileMixin,
			postsMixin,
			createPostMixin,
			openModalMixin,
			delPostMixin,
		],
		data() {
			return {
				comments: {},
				profile: [],
				dayToNow,
				day,
				tempPost: {},
				isNew: false,
				isLoading: false,
				status: {
					loadingItem: "",
				},
			};
		},
		components: {
			createPostModal,
		},
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
						this.isLoading = true;
						this.$refs.commentValue.forEach((item) => {
							if (res.data.status === "success") {
								item.value = "";
							}
						});

						this.status.loadingItem = "";
						this.getPosts();
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

			likesPost(post) {
				const isLike = post.likes.find((item) => item._id === this.profile._id);
				if (isLike) {
					this.delLikesPost(post);
					return;
				}
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "POST",
					url: `${process.env.VUE_APP_API}/post/${post._id}/likes`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						this.getPosts();
					})
					.catch((err) => {
						console.log(err);
					});
			},
			delLikesPost(post) {
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "DELETE",
					url: `${process.env.VUE_APP_API}/post/${post._id}/likes`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						console.log(res);
						this.getPosts();
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>