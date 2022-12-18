export default {
	data() {
		return {
			followersList: []
		};
	},
	methods: {
		getFollowers() {
			this.isLoading = true;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'GET',
				url: `${process.env.VUE_APP_API}/users/getFollowersList`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					this.isLoading = false;
					this.followersList = res.data.data.followers

				})
				.catch((err) => {
					console.log(err);
				});
		},

	},
	created() {
		this.getFollowers();
	}
};
