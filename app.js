//app.js
import config from 'utils/config'
import user from 'utils/user'
import util from 'utils/util'

App({
  onLaunch: function () {
    const app = this
    // 获取本地存储信息
    var user = wx.getStorageSync('user')

    // 没有存储的信息
    if(!user){
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
              console.log(data)
            },function(statusCode,data){
              wx.navigateTo({url: "../user_login/user_login"})
            })

          })
        }
      })
    }

  
    /*
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    */
  },
  globalData: {
    wxInfo: null,
    userInfo: null

  }

})