<template>
	<div class="w-100 bg-light h-100 pb-md-10 pb-19">
		<Loading :active="isLoading"></Loading>
		<ProfileHeader :id="id"></ProfileHeader>

		<div class="container pt-md-5 pt-10 d-flex flex-column flex-md-row">
			<div class="infoCard">
				<div
					class="
						w-100
						bg-white
						py-3
						px-4
						shadow-lg
						rounded-2
						w-100
						mb-md-0 mb-4
					"
				>
					<p class="text-primary fw-bold fs-lg mb-4">關於</p>
					<div class="w-100 t-border d-block mb-4"></div>
					<p class="mb-4">{{ personProfile.personalInfo }}</p>
				</div>
			</div>
			<div class="w-100 ms-md-9 ms-0">
				<div class="d-flex justify-content-end mb-4">
					<select
						class="form-select w-form-select select-filter"
						aria-label="Default select example"
					>
						<option value="1">最新貼文</option>
						<option value="2">最多人喜歡</option>
						<option value="3">最多則留言</option>
					</select>
				</div>

				<div class="w-100 mb-6" v-if="profile._id === personProfile._id">
					<div
						class="d-flex align-items-center rounded-2 p-3 shadow-lg bg-white"
					>
						<div class="rounded-circle me-3" style="height: 48px; width: 48px">
							<img alt="" :src="profile.avatar" class="rounded-circle" />
						</div>

						<button
							type="button"
							class="
								w-100
								rounded-4
								border-0
								text-start
								ps-5
								py-2
								text-black-50
							"
							@click="openPostModal(true)"
						>
							今天在想什麼呢?
						</button>
					</div>
				</div>
				<createPostModal
					ref="createPostModal"
					:post="tempPost"
					@create-post="createPost"
				></createPostModal>

				<PersonPosts :id="id"></PersonPosts>
			</div>
		</div>
	</div>
</template>



<script>
	import ProfileHeader from "../components/ProfileHeader.vue";
	import createPostModal from "../components/CreatePostModal.vue";
	import PersonPosts from "../components/PersonPosts.vue";
	import profileMixin from "../mixins/profileMixin";
	import otherProfileMixin from "../mixins/otherProfileMixin";
	import createPostMixin from "../mixins/createPostMixin";
	import openModalMixin from "../mixins/openModalMixin";

	export default {
		data() {
			return {
				tempPost: {},
				isLoading: false,
			};
		},
		mixins: [profileMixin, otherProfileMixin, createPostMixin, openModalMixin],

		components: {
			ProfileHeader,
			createPostModal,
			PersonPosts,
		},
	};
</script>
