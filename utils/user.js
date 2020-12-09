import util from 'util'
import config from 'config'

const save = function(userInfo){
  wx.setStorageSync('user', userInfo)
}

const getUserInfo = function(){
  return wx.getStorageSync('user')
}

const access = function(userInfo){
  // 更新最后登录时间
  util.post(config.url.userAccess,userInfo)
}

module.exports = {
  save : save,
  getUserInfo : getUserInfo,
  access : access
}