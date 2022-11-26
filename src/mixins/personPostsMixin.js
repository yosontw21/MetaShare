export default {
	data() {
		return {
			personPosts: [],
			isLoading: false,
	
		};
	},
	props: ['id'],
	methods: {
		getPersonPosts() {
			this.isLoading = true;
			const id = this.id;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'GET',
				url: `${process.env.VUE_APP_API}/posts/user/${id}`,
				headers: {
					Authorization: `Bearer ${token}`
				}
				
			})
				.then((res) => {
					this.isLoading = false;
					this.personPosts = res.data.data;
				})
				.catch((err) => {
					this.isLoading = false;
					console.log(err);
				});
		},
	
	},

	created() {
		this.getPersonPosts();
	}
};
