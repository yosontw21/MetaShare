export default {
	data() {
		return {
			profile: [],
			followers: [],
			following: [],
			isLoading: false
		};
	},
	methods: {
		getProfile() {
			this.isLoading = true;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'GET',
				url: `${process.env.VUE_APP_API}/users/myProfile`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					this.isLoading = false;
					this.profile = res.data.data;
					this.followers = res.data.data.followers;
					this.following = res.data.data.following;
				})
				.catch((err) => {
					this.isLoading = false;
					console.log(err);
					if (err.response.data.message === '您尚未登入') {
						this.$router.push('/login');
					}
				});
		}
	},
	created() {
		this.getProfile();
	}
};
