import axios from "axios";
import util from "../config";

// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const services = axios.create({
	baseURL:util.baseUrl,
	timeout:util.timeout
})
services.interceptors.request.use(config=>{
	if (localStorage.getItem('token')){
		config.headers[util.accessToken] =`${localStorage.getItem('token')}`
	}
	console.log(config)
	return config
},error => {
	return Promise.reject(error)
})
services.interceptors.response.use(res=>{
	if (res.data.code !== 200){
		window.$message.error(res.data.msg)
	}
	console.log(res)
	return res.data
},error => {
	return Promise.reject(error)
})
export default services
