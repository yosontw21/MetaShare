export default {
	data() {
		return {
			posts: [],
			isLoading: false
		};
	},
	methods: {
		getPosts() {
			this.isLoading = true;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'GET',
				url: `${process.env.VUE_APP_API}/posts`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					this.isLoading = false;
					this.posts = res.data.data;
				})
				.catch((err) => {
					this.isLoading = false;
					console.log(err);
				});
		}
	},

	created() {
		this.getPosts();
	}
};
