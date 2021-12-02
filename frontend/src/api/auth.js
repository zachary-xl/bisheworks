import request from "../lib/request";

export const login = (data)=>{
	return request({
		method: 'POST',
		url: "/login",
		data
	})
}
export const getUsers = ()=>{
	return request({
		url: "/sys/users/list",
		params:{
			page:1,
			limit:1
		}
	})
}
export const getMenu= ()=>{
	return request({
		url: "/sys/menu/list"
	})
}