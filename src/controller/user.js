/*
 * @Author: Tmier
 * @Date: 2021-06-09 23:33:48
 * @LastEditTime: 2021-06-09 23:37:49
 * @Description: 
 * @LastModifiedBy: Tmier
 */
const loginCheck = (username, password) => {
  if(username == 'lll' && password == '666') {
    return true
  }
  return false
}
module.exports = {
  loginCheck
}