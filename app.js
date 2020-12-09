//app.js
import config from 'utils/config'
import user from 'utils/user'
import util from 'utils/util'

App({
  onLaunch: function () {
    const app = this
    // 获取本地存储信息
    var userInfo = user.getUserInfo()

    // 没有存储的信息
    if(userInfo){
      user.access(userInfo)
      console.log(userInfo)
    }else{
      wx.login({
        success(res){
          util.post(config.url.getWxInfo,{
            code:res.code
          },function(data){
            // 微信信息保存到内存
            app.globalData.wxInfo = {
              code : res.code,
              session_key : data.session_key,
              openid : data.openid,
              unionid : data.unionid
            }
            // 用微信信息获取用户信息
            util.post(config.url.getUserInfo,app.globalData.wxInfo,function(data){
              app.globalData.userInfo = {
                UserId : data.UserId,
                UserName : data.UserName,
                UserHash : data.UserHash
              }
              user.save(app.globalData.userInfo)
            },function(statusCode,data){
              wx.navigateTo({url: "../user_login/user_login"})
            })

          })
        }
      })
    }
  },
  globalData: {
    wxInfo: null,
    userInfo: null

  }

})