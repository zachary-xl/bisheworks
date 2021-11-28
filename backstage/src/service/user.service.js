const User = require('../model/user.model')

class UserService {
	// 注册用户账户
	async createUser(username, password) {
		let { dataValues } = await User.create({ username, password });
		return dataValues
	}
	// 获取用户账号
	async getUserInfo({ id, username, password, is_admin }) {
		let whereOptions = {};
		id && Object.assign( whereOptions, {id} )
		username && Object.assign( whereOptions, {username} )
		password && Object.assign( whereOptions, {password} )
		is_admin && Object.assign( whereOptions, {is_admin} )
		let res = await User.findOne({
			attributes:['id', 'username', 'password', 'is_admin'],
			where:whereOptions
		})
		return res ? res.dataValues : null
	}
	
	// 修改密码
	async changePwd({ id, username, password, is_admin }){
		let whereOptions = {id};
		let changeOptions = {};
		username && Object.assign(changeOptions, {username})
		password && Object.assign(changeOptions, {password})
		is_admin && Object.assign(changeOptions, {is_admin})
		let res = await User.update(changeOptions,{where:whereOptions});
		return res[0]
	}
}

module.exports = new UserService();