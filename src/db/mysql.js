/*
 * @Author: Tmier
 * @Date: 2021-06-11 22:24:43
 * @LastEditTime: 2021-06-11 22:29:25
 * @Description:
 * @LastModifiedBy: Tmier
 */
const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')
// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 同意执行 sql 的函数

function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}
module.exports = {
  exec
}
