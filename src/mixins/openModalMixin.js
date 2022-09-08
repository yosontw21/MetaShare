import createPostModal from '../components/CreatePostModal.vue';
import createPostMixin from '../mixins/createPostMixin';

export default {
	mixins: [createPostMixin],
	data() {
		return {
			isLoading: false,
			isNew: false
		};
	},
	components: {
		createPostModal
	},
	methods: {
		openPostModal(isNew, item) {
			if (isNew) {
				this.tempPost = {};
			} else {
				this.tempPost = { ...item };
			}
			this.isNew = isNew;
			const createPostComponent = this.$refs.createPostModal;
			createPostComponent.showModal();
		}
	}
};
