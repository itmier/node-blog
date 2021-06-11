/*
 * @Author: Tmier
 * @Date: 2021-06-07 21:28:15
 * @LastEditTime: 2021-06-07 22:22:36
 * @Description: 
 * @LastModifiedBy: Tmier
 */
// part1 http服务

// const http= require('http')
// const server = http.createServer((req,res) => {
//   // 设置响应头
//   res.setHeader('Content-Type','application/json')
//   // 返回数据
//   res.end('<h1>返回内容</h1>')
// })
// server.listen(1996)
// console.log('OK');

// part2 GET

// const http= require('http')
// const querystring = require('querystring')
// const server = http.createServer((req,res) => {
//   res.setHeader('Content-Type','application/json')
//   console.log('method', req.method)
//   const url = req.url
//   console.log('url', url);
//   // 通过querystring.parse将类似a=1&b=2&c=3 转换为 {a:1,b:2,c:3}
//   req.query = querystring.parse(url.split('?')[1])
//   console.log('query', req.query);
//   res.end(JSON.stringify(req.query))
// })
// server.listen(1996)
// console.log('OK');


// part3 POST

const http = require('http')
const server = http.createServer((req,res) => {
  // 通过req.method来判断请求类型
  if(req.method == 'POST') {
    console.log('req content-type: ', req.headers['content-type']);
    // 接受数据
    let postData = ''
    // 监听req的data与end事件,当data时间传输完成后会触发req的end事件
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      console.log('postData: ', postData);
      res.end('Hello World! ')
    })
  }
})
server.listen(1996)
console.log('OK');