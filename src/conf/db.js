/*
 * @Author: Tmier
 * @Date: 2021-06-11 22:19:39
 * @LastEditTime: 2021-06-11 22:39:15
 * @Description:
 * @LastModifiedBy: Tmier
 */
const env = process.env.NODE_ENV // 获取环境参数

let MYSQL_CONF

if (env == 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'wyf666...',
    port: '3306',
    database: 'myblog'
  }
}
if (env == 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'wyf666...',
    port: '3306',
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}
