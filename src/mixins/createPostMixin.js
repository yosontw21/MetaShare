import postsMixin from './postsMixin.js';

export default {
	data() {
		return {
			tempPost: {
				content: null,
				image: null
			},
			isNew: false
		};
	},
	mixins: [postsMixin],
	methods: {
		createPost(item) {
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
					createPostComponent.hideModal();

					if (!this.isNew) {
						alert('編輯貼文成功');
					}
					this.getPosts();
				})
				.catch((err) => {
					if (err.response.data.status === 'Error') {
						alert(err.response.data.message);
					}
				});
		}
	}
};
