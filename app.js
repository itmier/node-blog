/*
 * @Author: Tmier
 * @Date: 2021-06-07 22:52:26
 * @LastEditTime: 2021-06-11 22:57:17
 * @Description:
 * @LastModifiedBy: Tmier
 */
const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')

// 用于处理 postData
const getPostData = req => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    // 非json数据类型,忽略并返回{}
    if (req.headers['content-type' !== 'application/json']) {
      resolve({})
      return
    }
    // 正确的
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      // 成功返回
      resolve(JSON.parse(postData))
    })
  })
}

const serverHandle = (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  // 获取path
  const url = req.url
  req.path = url.split('?')[0]

  // 解析 query
  req.query = querystring.parse(url.split('?')[1])

  // 处理 postData
  getPostData(req).then(postData => {
    req.body = postData
    // 处理 blog 路由 旧

    // const blogData = handleBlogRouter(req, res)
    // if (blogData) {
    //   res.end(JSON.stringify(blogData))
    //   return
    // }

    // 处理 blog 路由 新
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        res.end(JSON.stringify(blogData))
      })
      return
    }

    // 处理 user 路由
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
      return
    }
    // 未命中路由, 返回404
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.write('404 Not Found\n')
    res.end()
  })
}
module.exports = serverHandle
