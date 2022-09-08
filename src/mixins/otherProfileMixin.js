import profileMixin from '../mixins/profileMixin';
export default {
	data() {
		return {
			personProfile: [],
			followers: [],
			following: [],
			profile: [],
			isFollow: false,
			isLoading: false
		};
	},
	props: ['id'],
	mixins: [profileMixin],
	methods: {
		getPersonProfile() {
			const id = this.id;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'GET',
				url: `${process.env.VUE_APP_API}/users/otherProfile/${id}`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					this.personProfile = res.data.data;
					this.followers = res.data.data.followers;
					this.following = res.data.data.following;
					this.isFollow = this.followers.findIndex(
						(item) => item.user._id === this.profile._id
					);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		followUser() {
			this.isLoading = true;
			const id = this.id;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'POST',
				url: `${process.env.VUE_APP_API}/users/${id}/follows`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					if (res.data.status === 'success') {
						this.isLoading = false;
						alert('您已追蹤成功');
						this.getPersonProfile();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		unfollowUser() {
			this.isLoading = true;
			const id = this.id;
			const token = document.cookie.split(`jwt=`).pop();
			this.$http({
				method: 'DELETE',
				url: `${process.env.VUE_APP_API}/users/${id}/follows`,
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((res) => {
					if (res.data.status === 'success') {
						this.isLoading = false;
						alert('您已取消追蹤成功');
						this.getPersonProfile();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	},

	created() {
		this.getPersonProfile();
	}
};
