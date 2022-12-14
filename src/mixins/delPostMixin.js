export default {
	data() {
		return {
			isLoading: false
		};
	},
	methods: {
		delPost(id) {
			this.isLoading = true;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'DELETE',
				url: `${process.env.VUE_APP_API}/post/${id}`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					alert('刪除成功');
					this.isLoading = false;
					this.getPosts();
					this.getPersonPosts();
				})
				.catch((err) => {
					console.log(err);
					this.isLoading = false;
				});
		}
	}
};
