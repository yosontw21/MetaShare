<template>
	<div
		class="modal fade"
		id="exampleModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		ref="modal"

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
					<template v-for="(post, i) in posts" :key="post.id">
						<div  class="modal-body"  v-for="likePost in post.likes" >
										{{ i }}			{{likePost.name  }}
						</div>
					</template>
	

		

			</div>
		</div>
	</div>
</template>


<script>
	import Modal from "bootstrap/js/dist/modal";
	import postsMixin from "@/mixins/postsMixin";

	export default {
		data() {
			return {
				modal: {},
			};
		},
		mixins: [postsMixin],
		methods: {
			showModal() {
				this.modal.show();
			},
			hideModal() {
				this.modal.hide();
			},
		},
		mounted() {
			this.modal = new Modal(this.$refs.modal);
		},
	};
</script>
