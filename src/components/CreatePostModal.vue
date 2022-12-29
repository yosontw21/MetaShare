
	<template>
	<div
		class="modal fade"
		id="createPost"
		tabindex="-1"
		aria-hidden="true"
		ref="createPostModal"
	>
		<Loading :active="isLoading"></Loading>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<div class="me-4">
						<div class="rounded-circle" style="width: 58px; height: 58px">
							<img
								:src="profile.avatar"
								alt=""
								style="width: 58px; height: 58px"
								class="rounded-circle"
							/>
						</div>
					</div>
					<h5 class="modal-title">說點什麼呢?</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<textarea
								rows="5"
								class="form-control"
								id="message-text"
								placeholder="貼文內容"
								style="background-color: #f4f4f4"
								v-model="tempPost.content"
							></textarea>
							<div class="mt-4" v-if="tempPost.image" style="height: 460px">
								<div
									class=""
									style="
										position: relative;
										overflow: hidden;
										width: 100%;
										height: 100%;
									"
								>
									<div
										class=""
										style="
											position: absolute;
											inset: 0px;
											overflow: scroll;
											margin-right: -17px;
											margin-bottom: -17px;
										"
									></div>

									<div class="position-relative rounded-2 overflow-hidden">
										<button
											type="button"
											class="
												position-absolute
												d-flex
												align-items-center
												justify-content-center
												bg-white
												btn
												rounded-circle
											"
											@click="delImg"
											style="top: 6px; right: 6px; width: 24px; height: 24px; &:hover: border: none;"
										>
											<span class="material-icons fs-md"> close </span>
										</button>
										<img :src="tempPost.image" alt="" />
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>

				<div class="modal-footer d-flex justify-content-between">
					<label
						for="uploadLoadingBtn"
						class="
							position-relative
							d-inline-flex
							justify-content-center
							rounded
							align-items-center
							py-2
							px-4
							btn--secondary
						"
					>
						<input
							id="uploadLoadingBtn"
							type="file"
							class="position-absolute opacity-0 w-100"
							ref="fileInput"
							@change="uploadImg"
							style="left: 0; cursor: pointer"
						/>
						<span class="material-icons"> image </span>
						<p>上傳圖片</p>
					</label>
					<button
						type="button"
						class="btn btn-primary text-white"
						@click="$emit('create-post', tempPost)"
						:disabled="isLoading"
					>
						發表貼文
						<!-- <div
							class="spinner-border spinner-border-sm mt-1 ms-2"
							role="status"
						>
							<span class="visually-hidden">Loading...</span>
						</div> -->
					</button>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import Modal from "bootstrap/js/dist/modal";
	import profileMixin from "../mixins/profileMixin";

	export default {
		mixins: [profileMixin],
		data() {
			return {
				createPostModal: {},
				isLoading: false,
				tempPost: {
					content: null,
					image: null,
				},
			};
		},
		methods: {

			uploadImg() {
				this.isLoading = true;

				let uploadedImg = this.$refs.fileInput.files[0];
				const formData = new FormData();
				formData.append("image", uploadedImg);

				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "POST",
					url: `${process.env.VUE_APP_API}/upload`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
					data: formData,
				})
					.then((res) => {
						if (res.data.status === "success") {
							this.tempPost.image = res.data.data;
							this.isLoading = false;
						}
					})
					.catch((err) => {
						this.isLoading = false;
						alert(err.response.data.message);
					});
			},
			delImg() {
				this.tempPost.image = null;
			},
			showModal() {
				this.createPostModal.show();
				this.isLoading = false;
			},

			hideModal() {
				this.createPostModal.hide();
				this.isLoading = false;
			},

		},
		props: {
			post: {
				type: Object,

				default() {
					return {};
				},
			},
		},
		watch: {
			post() {
				this.tempPost = this.post;
			},
		},
		mounted() {
			this.createPostModal = new Modal(this.$refs.createPostModal);
		},
	};
</script>
