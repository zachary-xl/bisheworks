const path = require('path');
const jwt = require('jsonwebtoken');
const {JWT_TOKEN, JWT_EXPIRED} = require('../config');
const {userAuthExpired, userAuthError} = require('../controller/user.controller')
const {userIsAdmin, uploadError} = require('../constant/err.message')
class ConfigMiddleware {
	// 设置token
	async setAuthToken(ctx, next){
		 let {password, ...rest} = ctx.request.body;
		ctx.auth = jwt.sign(rest,JWT_TOKEN,{expiresIn:JWT_EXPIRED})
		await next();
	}
	// 验证token
	async verifyAuthExpired(ctx, next) {
		let {authorization=''} = ctx.request.headers
		let token = authorization.replace('Bearer ', '')
		try {
			let res = await jwt.verify(token, JWT_TOKEN);
			ctx.state.auth = res
		} catch (err) {
			console.log('token错误', err)
			switch (err.name) {
				case 'TokenExpiredError':
					return ctx.app.emit('error', userAuthExpired, ctx)
				case 'JsonWebTokenError':
					return ctx.app.emit('error', userAuthError, ctx)
			}
		}
		await next();
	}
	// 判断是否管理员
	async decideIsAdmin(ctx,next){
		let {is_admin} = ctx.state.auth;
		if (!is_admin){
			return ctx.app.emit('error', userIsAdmin, ctx);
		}
		await next();
	}
	// 上传图片
	async upload (ctx,next){
		let { file } = ctx.request.files
		if (file){
			ctx.body = {
				code:200,
				message:'上传成功',
				result:path.basename(file.path)
			}
		}else {
			return ctx.app.emit('error', uploadError, ctx);
		}
	}
}

module.exports = new ConfigMiddleware();