const Router = require('koa-router');
const router = new Router({prefix:'/upload'});
const {upload} = require('../middleware/config.middleware')

router.post('/',upload)

module.exports = router;