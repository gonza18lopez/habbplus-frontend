import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},

	{
		path: '/community',
		name: 'Community',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Community/Index.vue'),
		children: [
			{
				path: 'partners',
				component: () => import('../views/Community/Partners.vue')
			}
		]
	},

	{
		path: '/articles/:id',
		name: 'show article',
		component: () => import('../views/Articles/Show.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkExactActiveClass: 'active',
	linkActiveClass: 'active'
})

export default router
