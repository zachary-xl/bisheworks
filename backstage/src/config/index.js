const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
// 解析根目录.env文件
const config = dotenv.parse(fs.readFileSync(path.join(__dirname,'../../.env')))
// const config = dotenv.config()

module.exports = config
