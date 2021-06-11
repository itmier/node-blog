/*
 * @Author: Tmier
 * @Date: 2021-06-08 07:19:55
 * @LastEditTime: 2021-06-08 23:33:10
 * @Description: 
 * @LastModifiedBy: Tmier
 */
class BaseModel {
  constructor(data,message) {
    if(typeof data == 'string') {
      this.message = data
      data = null
      message = null
    }
    if(data) {
      this.data = data
    }
    if(message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data,message) {
    super(data, message)
    this.errno = 0
  }
}
class ErrorModel extends BaseModel {
  constructor(data,message) {
    super(data,message)
    this.errno = -1
  }
}
module.exports = {
  SuccessModel,
  ErrorModel
}