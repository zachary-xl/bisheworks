const {createUser, changePwd} = require('../service/user.service')
const {userErrorHandler, userChangePwdError} = require('../constant/err.message')

class UserController {
	// 注册
	async register(ctx, next) {
		let {username, password} = ctx.request.body
		// 操作数据库
		try {
			let res = await createUser(username, password)
			ctx.body = {
				code: 0,
				message: '注册成功',
				result: {
					id: res.id,
					username: res.username
				}
			}
		} catch (err) {
			console.log("注册错误", err)
			ctx.app.emit('error', userErrorHandler, ctx)
		}
		return;
	}
	
	// 登录
	async login(ctx, next) {
		ctx.body = {
			code: 200,
			message: '登陆成功',
			result: {
				token: ctx.auth
			}
		}
	}
	
	// 修改密码
	async userUpdatePwd(ctx, next) {
		let id = ctx.state.auth.id;
		let {password} = ctx.request.body
		try {
			let res = await changePwd({id, password})
			if (res) {
				ctx.body = {
					code: 200,
					message: '更改密码成功',
					result: ''
				}
			}
		} catch (err) {
			ctx.app.emit('error', userChangePwdError, ctx)
			console.log('密码修改失败', err)
		}
		await next();
	}
}

module.exports = new UserController();