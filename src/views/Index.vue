<template>
	<Navbar></Navbar>

	<div class="w-100 bg-light h-100 pb-md-10 pb-19 px-2">
		<div class="container pt-20 d-flex">
			<Sidelist></Sidelist>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Sidelist from "../components/Sidelist.vue";
	import Navbar from "../components/Navbar.vue";
	import profileMixin from "../mixins/profileMixin";

	export default {
		mixins: [profileMixin],

		components: {
			Sidelist,
			Navbar,
		},

		created() {
			const token = document.cookie.split(`jwt=`).pop();
			if (!token) {
				let thirdToken = this.$route.query.token;
				document.cookie = `jwt=${thirdToken}; path=/`;
				this.axios.defaults.headers.common["Authorization"] = thirdToken;
			} else {
				this.$http({
					method: "POST",
					url: `${process.env.VUE_APP_API}/users/check`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => {
						console.log(res.data.status);
					})
					.catch((err) => {
						if (
							err.response.data.message === "您尚未登入" ||
							err.response.data.message === "invalid token"
						) {
							this.$router.push("/login");
						}
					});
			}
		},
	};
</script>