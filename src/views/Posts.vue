<template>
	<Loading :active="isLoading"></Loading>
	<div class="w-100 ms-md-9 ms-0">
		<!-- <div class="d-flex justify-content-end mb-4">
			<select
				class="form-select w-form-select select-filter"
				aria-label="Default select example"
			>
				<option value="1">最新貼文</option>
				<option value="2">最多人喜歡</option>
				<option value="3">最多則留言</option>
			</select>
		</div> -->
		<div class="w-100 mb-6">
			<div class="d-flex align-items-center rounded-2 p-3 shadow-lg bg-white">
				<div class="rounded-circle me-3" style="height: 48px; width: 48px">
					<img :src="profile.avatar" alt="" style="height: 48px; width: 48px" class="rounded-circle" />
				</div>

				<button
					type="button"
					class="w-100 rounded-4 border-0 text-start ps-5 py-2"
					@click="openPostModal(true)"
				>
					今天在想什麼呢?
				</button>
			</div>
		</div>
		<PostsList></PostsList>
		<createPostModal
			ref="createPostModal"
			:post="tempPost"
			@create-post="createPost"
		></createPostModal>
	</div>
</template>

<script>
	import PostsList from "../components/PostsList.vue";
	import createPostModal from "../components/CreatePostModal.vue";
	import profileMixin from "../mixins/profileMixin";
	import postsMixin from "../mixins/postsMixin";
	import createPostMixin from "../mixins/createPostMixin";
	import openModalMixin from "../mixins/openModalMixin";

	export default {
		mixins: [profileMixin, postsMixin, createPostMixin, openModalMixin],
		data() {
			return {
				isNew: false,
				isLoading: false,
			};
		},
		components: {
			PostsList,
			createPostModal,
		},
	};
</script>