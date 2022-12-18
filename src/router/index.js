import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('../views/Index.vue'),
		children: [
			{
				path: 'follow',
				component: () => import('../views/Follow.vue')
			},
			{
				path: 'followers',
				component: () => import('../views/Followers.vue')
			},
			{
				path: 'likesPost',
				component: () => import('../views/LikesPost.vue')
			},
			{
				path: 'post',
				name: 'Post',
				component: () => import('../views/Posts.vue')
			},
			{
				path: 'list',
				component: () => import('../views/List.vue')
			}
		]
	},

	{
		path: '/profile/:id',
		name: 'profile',
		component: () => import('../views/Profile.vue'),
		props: (route) => {
			return {
				id: route.params.id
			};
		}
	},
	{
		path: '/updateUser',
		name: 'updateUser',
		component: () => import('../views/UpdateUser.vue')
	},

	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('../views/SignUp.vue')
	},
	{
		path: '/ForgotPassword',
		name: 'forgotPassword',
		component: () => import('../views/ForgotPassword.vue')
	},
	{
		path: '/ResetPassword/:token',
		name: 'resetPassword',
		component: () => import('../views/ResetPassword.vue'),
		props: (route) => {
			return {
				token: route.params.token
			};
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: {
			name: 'Post'
		}
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	linkActiveClass: '',
	linkExactActiveClass: 'active'
});

export default router;
