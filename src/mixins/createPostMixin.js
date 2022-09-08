import postsMixin from './postsMixin.js';

export default {
	data() {
		return {
			tempPost: {},
			isNew: false
		};
	},
	mixins: [postsMixin],
	methods: {
		createPost(item) {
			this.isLoading = true;
			const token = document.cookie.split(`jwt=`).pop();

			this.tempPost = item;

			let api = `${process.env.VUE_APP_API}/post`;
			let httpMethod = 'POST';

			if (!this.isNew) {
				api = `${process.env.VUE_APP_API}/post/${item.id}`;
				httpMethod = 'PATCH';
			}
			const createPostComponent = this.$refs.createPostModal;
			this.$http({
				method: `${httpMethod}`,
				url: `${api}`,
				headers: {
					Authorization: `Bearer ${token}`
				},
				data: this.tempPost
			})
				.then((res) => {
					this.isLoading = false;
					createPostComponent.hideModal();
					this.getPosts();
				})
				.catch((err) => {
					if (err.response.data.status === 'Error') {
						alert(err.response.data.message);
						this.isLoading = false;
					}
				});
		}
	}
};
