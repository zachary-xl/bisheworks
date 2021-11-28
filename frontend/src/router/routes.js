const login = {
	path:'/login',
	name:'login',
	component:()=>import('../view/login.vue')
}
const other = {
	path:'/:pathMatch(.*)*',
	name:'NotFound',
	component:()=>import('../view/NotFound.vue')
}
const router = {
	path:'/index',
	name:'index',
	component:()=>import('../view/index.vue')
}
export default [
	login,
	other,
	router
]