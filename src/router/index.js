import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		// 		 {
		//       path: "/",
		//       redirect: "/home"
		//     },
		//     {
		//       path: '/home',
		//       name: 'home',
		//       component: home
		//     },
		{
			path: '/home',
			name: 'home',
			component: () => import("@/views/home/index.vue"),
			meta: {
				title: "首页"
			}
		},
		{
			path: '/creditZM',
			name: 'creditZM',
			component: () => import("@/views/creditZM/creditZM.vue"),
			meta: {
				title: "信用证明"
			}
		},
		{
			path: '/creditTT',
			name: 'creditTT',
			component: () => import("@/views/creditTT/index.vue"),
			meta: {
				title: "信用头条"
			}
		},
		{
			path: '/my',
			name: 'my',
			redirect: "/login",
			component: () => import("@/views/my/index.vue"),
			meta: {
				title: "个人中心"
			}
		},
		{
			path: '/login',
			name: 'login',
			component: () => import("@/views/login/login.vue"),
			meta: {
				title: "登陆"
			}
		},
		{
			path: '/reg',
			name: 'reg',
			component: () => import("@/views/login/reg.vue"),
			meta: {
				title: "注册"
			}
		},
		{
			path: '/password',
			name: 'password',
			component: () => import("@/views/login/password.vue"),
			meta: {
				title: "忘记密码"
			}
		},
		{
			path: '/searchList',
			name: 'searchList',
			component: () => import("@/views/search/searchList.vue"),
			meta: {
				title: "搜索"
			}
		},
		{
			path: '/search',
			name: 'search',
			component: () => import("@/views/search/search.vue"),
			meta: {
				title: "搜索列表"
			}
		},
		{
			path: '/creditPay',
			name: 'creditPay',
			component: () => import("@/views/creditZM/creditPay.vue"),
			meta: {
				title: "信用报告"
			}
		},
	]
})
