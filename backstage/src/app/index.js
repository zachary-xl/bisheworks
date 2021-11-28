const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');

const router = require('../router')
const errorHandler = require('./errorHandler')
const app = new Koa();
/**
 * @param on监听的事件
 * @param emit注册监听事件
 * @param use使用中间件
 * */
app
	.on('error', errorHandler)
	.use(koaBody({
		multipart:true,
		formidable:{
			uploadDir:path.join(__dirname,'../upload'),
			keepExtensions:true
		}
	}))
	.use(router.routes())
	.use(router.allowedMethods())

module.exports = app