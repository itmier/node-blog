/*
 * @Author: Tmier
 * @Date: 2021-06-07 21:28:15
 * @LastEditTime: 2021-06-07 22:47:49
 * @Description:
 * @LastModifiedBy: Tmier
 */
const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = req.url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])
  // 设置响应头
  res.setHeader('Content-Type', 'application/json')
  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }
  // 分别对GET和POST进行处理
  if(method == 'GET') {
    res.end(JSON.stringify(resData))
  }
  if(method == 'POST') {
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      res.end(JSON.stringify(resData))
    })
  }
})
server.listen(1996)
console.log('OK')
