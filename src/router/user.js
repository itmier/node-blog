/*
 * @Author: Tmier
 * @Date: 2021-06-08 06:47:56
 * @LastEditTime: 2021-06-09 23:40:33
 * @Description:
 * @LastModifiedBy: Tmier
 */
const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if (method == 'POST' && req.path == '/api/user/login') {
    const { username, password } = req.body
    const result = loginCheck(username,password)
    if(result) {
      return new SuccessModel()
    }
    return new ErrorModel('登录失败~')
  }
}
module.exports = handleUserRouter
