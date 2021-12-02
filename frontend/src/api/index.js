import request from "../lib/request";

export const login = (data)=>{
	return request({
		method: 'POST',
		url: "/api/login",
		data
	})
}