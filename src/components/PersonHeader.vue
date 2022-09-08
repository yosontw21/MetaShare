<template>
  	<div class="container-fluid pt-20 shadow-lg rounded-bottom-xl">
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
							:src="profile.avatar"
						/>
					</div>
					<div class="mt-md-10 mt-5">
						<p class="fs-2xl fw-bold text-center text-md-start">
							{{ profile.name }}
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
			</div>
		</div>
</template>

<script>
import profileMixin from "../mixins/profileMixin";

export default {
  mixins:[profileMixin],
}
</script>