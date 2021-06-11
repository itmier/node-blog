/*
 * @Author: Tmier
 * @Date: 2021-06-10 22:53:13
 * @LastEditTime: 2021-06-10 23:09:28
 * @Description: 
 * @LastModifiedBy: Tmier
 */
const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wyf666...',
  port: '3306',
  database: 'myblog'
})

// 开始连接
con.connect()

// 执行sql语句
const sql = 'select * from users;'
// const sql = 'select id, username from users;'
// const sql = `update users set realname='哈哈' where username='emier';`
// const sql = `insert into users (username,${'password'},realname) values ('emier2','666', '天魁星');`
// const sql = `insert into blogs (title, content, createtime, author) values ('震惊!标题E', '我是内容,内容为王EE', 1623336080690, 'tmier');`
con.query(sql,(err,result) => {
  if(err){
    console.error(err)
    return
  }
  console.log(result);
})

// 关闭连接
con.end()