const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const alert = function(msg){
  wx.showModal({
    content: msg,
    showCancel: false,
  })
}

const post = function(url,data,successCallback,failCallback){
  wx.request({
    url:url,
    method: 'POST',
    data: data,
    success: function(res){
      if(res.statusCode==200){
        if(successCallback){
          successCallback(res.data);
        }
      }else{
        if(failCallback){
          failCallback(res.statusCode,res.data);
        }else{
          if(res.data){
            alert(res.data);
          }
        }
      }
    },
    fail: function(){
      alert('网络出错，请稍后再试');
    }
  });
}

module.exports = {
  formatTime: formatTime,
  alert: alert,
  post: post
}
