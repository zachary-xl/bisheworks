const { DataTypes } = require('sequelize');
const seq= require('../db/seq');
// 创建表
const User = seq.define('sql_user', {
	username:{
		type:DataTypes.STRING,
		allowEmpty:false,
		unique:true,
		comment:'用户名'
	},
	password:{
		type:DataTypes.CHAR(64),
		allowEmpty:false,
		comment:'密码'
	},
	is_admin:{
		type:DataTypes.BOOLEAN,
		allowEmpty:false,
		defaultValue:0,
		comment:'是否管理员'
	},
},{
	tableName: 'sql_user'
});
// User.sync({ force: true });

module.exports = User