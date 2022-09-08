<template>
	<div class="d-md-block d-none sidebarFix">
		<div
			class="bg-white rounded-3 shadow-lg py-8 px-7 text-center mb-3"
			style="width: 240px"
		>
			<div
				class="mb-2 m-auto rounded-3"
				style="width: 120px; height: 120px"
			>
				<img :src="profile.avatar" alt="" class="rounded-3" />
			</div>
			<div class="mb-5 fs-lg fw-bold text-dark userName"></div>
			<span class="w-100 t-border d-block mb-5"></span>

			<div class="d-flex justify-content-center">
				<div class="r-border pe-6">
					<p class="fs-xs">關注數</p>
					<button type="button" class="btn-none">
						{{ followers.length }}
					</button>
				</div>
				<div class="ps-6">
					<p class="fs-xs">追蹤中</p>
					<button type="button" class="btn-none">
						{{ following.length }}
					</button>
				</div>
			</div>
		</div>
		<div class="px-9 py-4 bg-white rounded-3 shadow-lg" style="width: 240px">
			<router-link
				to="/follow"
				class="
					py-2
					px-3
					d-flex
					align-items-center
					rounded-2
					border border-secondary
					bg-primary-100
					mb-3
					h-primary-100
				"
			>
				<span
					class="material-icons p-1 fs-md rounded-circle bg-white me-4"
					style="color: #faac38"
				>
					notifications
				</span>
				<p class="fw-bold">追蹤名單</p>
			</router-link>

			<router-link
				to="likesPost"
				class="
					py-2
					px-3
					d-flex
					align-items-center
					rounded-2
					border border-secondary
					bg-primary-100
					mb-3
					h-primary-100
				"
			>
				<span
					class="material-icons p-1 fs-md rounded-circle bg-white me-4"
					style="color: #de5d4b"
				>
					favorite
				</span>
				<p class="fw-bold">喜歡的貼文</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	import profileMixin from "../mixins/profileMixin";
	export default {
		mixins: [profileMixin],
	};
</script>

