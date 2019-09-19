// 应用运行配置
const path = require('path');
const { argv } = require('yargs');


// 数据库配置
exports.MONGODB = {
	uri: `mongodb://127.0.0.1:${argv.dbport || '27017'}/blogNode`,
	username: argv.db_username || 'DB_username',
	password: argv.db_password || 'DB_password',
};