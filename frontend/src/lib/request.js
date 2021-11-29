import axios from "axios";
import qs from "qs";
import util from "../config";
import store from "../store";
import router from "../router";

axios.defaults.baseURL = util.baseUrl;
axios.defaults.timeout = util.timeout;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(config =>{
	const token = store.state.token;
	token && (config.headers.Authorization = token);
	return config;
},error => {
	return Promise.error(error);
})
axios.interceptors.response.use(response => {
	if (response.status === 200) {
		return Promise.resolve(response);
	} else {
		return Promise.reject(response);
	}
},error => {
	if (error.response.status) {
		switch (error.response.status) {
			// 401: 未登录
			case 401:
				router.replace({
					path: '/login',
					query: {
						redirect: router.currentRoute.fullPath
					}
				});
				break;
			// 403 token过期
			case 403:
				window.$message.error('登录过期，请重新登录');
				// 清除token
				localStorage.removeItem('token');
				store.commit('setToken', null);
				setTimeout(() => {
					router.replace({
						path: '/login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					});
				}, 1000);
				break;
			// 404请求不存在
			case 404:
				window.$message.error('网络请求不存在');
				break;
			// 其他错误，直接抛出错误提示
			default:
				window.$message.error(error.response.data.message);
		}
		return Promise.reject(error.response);
	}
});
const errorHandle = (status, error) => {
	// 状态码判断
	switch (status) {
		// 401: 未登录
		case 401:
			router.replace({
				path: '/login',
				query: {
					redirect: router.currentRoute.fullPath
				}
			});
			break;
		// 403 token过期
		case 403:
			window.$message.error('登录过期，请重新登录');
			// 清除token
			localStorage.removeItem('token');
			store.commit('setToken', null);
			setTimeout(() => {
				router.replace({
					path: '/login',
					query: {
						redirect: router.currentRoute.fullPath
					}
				});
			}, 1000);
			break;
		// 404请求不存在
		case 404:
			window.$message.error('网络请求不存在');
			break;
		// 其他错误，直接抛出错误提示
		default:
			window.$message.error(error.response.data.message);
	}}


