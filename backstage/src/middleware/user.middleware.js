const bcrypt = require('bcryptjs')
const {getUserInfo, changePwd} = require("../service/user.service");
const {
	userFormatError,
	userAlreadyExist,
	userErrorHandler,
	userPwdBcrypt,
	userDoesNotExist,
	userWrongPassword,
	userLoginError, userChangePwdError
} = require('../constant/err.message')

class UserMiddleware {
	// 判断用户名密码是否为空
	async userAccountEmpty(ctx, next) {
		let {username, password} = ctx.request.body
		if (!username || !password) {
			return ctx.app.emit('error', userFormatError, ctx)
		}
		await next();
	}
	// 判断用户名是否存在
	async userAccountExist(ctx, next) {
		let {username} = ctx.request.body
		try {
			let res = await getUserInfo({username})
			if (res) {
				return ctx.app.emit('error', userAlreadyExist, ctx)
			}
		} catch (err) {
			console.log("注册错误", err)
			return ctx.app.emit('error', userErrorHandler, ctx)
		}
		await next();
	}
	// 判断密码是否加密成功
	async userPwdBcrypt(ctx, next){
		const {password} = ctx.request.body
		try {
			let salt = bcrypt.genSaltSync(10);
			let hash = bcrypt.hashSync(password, salt);
			ctx.request.body.password = hash;
		}catch (err) {
			console.log('加密失败',err)
			return ctx.app.emit('error',userPwdBcrypt,ctx);
		}
		await next();
	}
	// 判断登录密码是否正确
	async userLoginVerify(ctx, next){
		const {username,password} = ctx.request.body
		try {
			let res = await getUserInfo({username})
			ctx.request.body=res
			if (!res){
				console.log('用户不存在',username)
				return ctx.app.emit('error',userDoesNotExist,ctx)
			}
			if (!bcrypt.compareSync(password, res.password)){
				console.log('密码错误',password)
				return ctx.app.emit('error',userWrongPassword,ctx)
			}
		}catch (err) {
			console.log('登陆失败',err)
			return ctx.app.emit('error',userLoginError,ctx)
		}
		await next();
	}
	
}

module.exports = new UserMiddleware()