import { createRouter, createWebHistory} from "vue-router";
import routes from './routes'

const router = createRouter({
	routes,
	history:createWebHistory()
})
router.beforeEach((to, from,next)=>{
	console.log(to.name)
	if(!to.name) {
		window.localStorage.setItem('token','')
		next('/login');
	}
	if (to.name == 'login') {
		window.localStorage.setItem('token','')
		next();
	}
	if (to.name){
		if (!window.localStorage.getItem('token') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
			window.localStorage.setItem('token','')
			next('/login');
		} else {
			next();
		}
	}
})

export default router;