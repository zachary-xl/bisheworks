const Router = require('koa-router');
const { register, login, userUpdatePwd } = require('../controller/user.controller');
const { verifyAuthExpired, setAuthToken, } = require('../middleware/config.middleware')
const { userAccountEmpty, userAccountExist, userPwdBcrypt, userLoginVerify } = require('../middleware/user.middleware');
const router = new Router({prefix: '/user'});

router.post('/register', userAccountEmpty, userAccountExist, userPwdBcrypt, register)
router.post('/login', userLoginVerify,setAuthToken, login)
router.patch('/edit', userAccountEmpty,verifyAuthExpired, userPwdBcrypt,userUpdatePwd)

module.exports = router