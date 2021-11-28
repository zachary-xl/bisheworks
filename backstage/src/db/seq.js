const {
	SQL_DB,
	SQL_HOST,
	SQL_USER,
	SQL_PASS
} = require('../config');
const {Sequelize} = require('sequelize');
// 连接数据库
const seq = new Sequelize(SQL_DB, SQL_USER, SQL_PASS, {
	host: SQL_HOST,
	dialect: 'mysql'
});;

/*seq.authenticate().then(res => {
	console.log(res)
}).catch(err => {
	console.log(err)
})*/

module.exports = seq