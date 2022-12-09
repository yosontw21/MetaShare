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
			// const filter = {
			// 	sort: `?timeSort=${sort}`,
			// 	search: `&q=${search}`
			// };
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'GET',
				url: `${process.env.VUE_APP_API}/posts`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					this.posts = res.data.data;
					this.isLoading = false;
					// console.log(this.posts);
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
