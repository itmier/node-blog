/*
 * @Author: Tmier
 * @Date: 2021-06-08 23:18:55
 * @LastEditTime: 2021-06-11 23:35:05
 * @Description:
 * @LastModifiedBy: Tmier
 */

const {exec} = require('../db/mysql.js')

const getList = (author, keyword) => {
  
  let sql = `
    select * from blogs where 1=1 
  `
  if (author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  // 返回的是个Promise
  return exec(sql)
  
}
// 博客详情
const getDetail = id => {
  const sql = `select * from blogs where id='${id}' `
  return exec(sql).then(rows => {
    return rows[0]
  })
}
// 新建博客
const newBlog = (blogData = {}) => {
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()
  const sql = `
    insert into blogs (title,content,createtime,author) values ('${title}','${content}',${createTime}, '${author}');
  `
  return exec(sql).then(insertData => {
    // console.log('insertData',insertData);
    return {
      id: insertData.insertId
    }
  })
}
const updateBlog = (id,blogData= {}) => {
  return true
}
const delBlog = (id) => {
  // id: 要删除博客的ID
  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
