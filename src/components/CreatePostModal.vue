<template>
	<div
		class="modal fade"
		id="createPost"
		tabindex="-1"
		aria-labelledby="createPostLabel"
		aria-hidden="true"
		ref="createPostModal"
	>
		<Loading :active="isLoading"></Loading>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<div class="me-4" style="width: 58px; height: 58px">
						<div class="rounded-circle">
							<img :src="profile.avatar" alt="" class="rounded-circle" />
						</div>
					</div>
					<h5 class="modal-title" id="createPostLabel">說點什麼呢?</h5>
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
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-primary text-white"
						@click="$emit('create-post', tempPost)"
					>
						發表貼文
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
				tempPost: {},
			};
		},
		methods: {
			showModal() {
				this.createPostModal.show();
			},

			hideModal() {
				this.createPostModal.hide();
				this.isLoading = true;
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
