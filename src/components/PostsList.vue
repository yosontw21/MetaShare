<template>
	<Loading :active="isLoading"></Loading>
	<createPostModal
		ref="createPostModal"
		:post="tempPost"
		@create-post="createPost"
	></createPostModal>

	<div class="w-100 mb-6" v-for="(post, i) in posts" :key="post.id">
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
							id="post.id"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<span class="material-icons"> more_horiz </span>
						</a>

						<ul class="dropdown-menu" aria-labelledby="post.id">
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
				<div class="rounded-3 mt-3" style="max-height: 740px" v-if="post.image">
					<img
						:src="post.image"
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
					@click="likesPost(post)"
				>
					<div
						class="d-flex align-items-center"
						v-if="post.likes.find((item) => item._id === this.profile._id)"
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
			<div class="border-bottom pb-2 mb-3 d-flex align-items-center">
				<div class="me-2">
					<button
						type="button"
						class="border-0 bg-white d-flex"
						data-bs-toggle="modal"
						data-bs-target="#exampleModal"
					
					>
						<div
							class="fs-xs text-nowrap"
							v-if="post.likes.length === 0"
							style="color: #b9b9b9"
						>
							<span class="material-icons fs-lg me-2"> favorite_border</span>
							<span class="">成為第一個喜歡朋友</span>
						</div>
						<div class="fs-xs" v-else>
							<span class="material-icons fs-lg me-2" style="color: #de5d4b">
								favorite
							</span>
							<span>{{ post.likes.length }}個人喜歡</span>
						</div>
					</button>
				</div>

				<div class="d-flex align-items-center justify-content-start">
					<button type="button" class="border-0 bg-white d-flex">
						<div
							v-if="post.comments.length === 0"
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
						ref="commentValue"
						@keydown.enter="createComment(post.id)"
					/>
					<button
						@click="createComment(post.id)"
						:disabled="this.status.loadingItem === post.id"
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
							v-if="this.status.loadingItem === post.id"
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
			id="exampleModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import { day, dayToNow } from "../utils/day";
	import profileMixin from "../mixins/profileMixin";
	import postsMixin from "../mixins/postsMixin";
	import createPostModal from "../components/CreatePostModal.vue";
	import createPostMixin from "../mixins/createPostMixin";
	import openModalMixin from "../mixins/openModalMixin";
	import delPostMixin from "../mixins/delPostMixin";
	import LikesPostModal from "../components/LikesPostModal.vue";

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
				isLike: [],
			};
		},
		components: {
			createPostModal,
			LikesPostModal,
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
						this.$refs.commentValue.forEach((item) => {
							if (res.data.status === "success") {
								item.value = "";
							}
						});
						this.status.loadingItem = "";
						this.getPosts();
					})
					.catch((err) => {
						console.log(err);
						if (err.response.data.status === "Error") {
							alert("請輸入留言內容");
							this.status.loadingItem = false;
						}
					});
			},
			likesPost(post) {
				this.isLike = post.likes.find((item) => item._id === this.profile._id);
				if (this.isLike) {
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
						this.getPosts();
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>
