/*
 * @Author: Tmier
 * @Date: 2021-06-07 22:47:18
 * @LastEditTime: 2021-06-07 23:07:31
 * @Description: 
 * @LastModifiedBy: Tmier
 */
const http = require('http')

const PORT = 1996

const serverHandle = require('../app.js')

const server = http.createServer(serverHandle)

server.listen(PORT)
