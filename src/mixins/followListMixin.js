export default {
	data() {
		return {
			followingList: []
		};
	},
	methods: {
		getFollow() {
			this.isLoading = true;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'GET',
				url: `${process.env.VUE_APP_API}/users/getFollowingList`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					this.isLoading = false;
					this.followingList = res.data.data.following;
				})
				.catch((err) => {
					console.log(err);
				});
		},

	},
	created() {
		this.getFollow();
	}
};
