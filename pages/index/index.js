//index.js

const util = require("../../utils/util")
const config = require("../../utils/config")

//获取应用实例
const app = getApp()

Page({
  data: {
    navIndex : 0,
    articleList : null,
    reviewList : null,
    memoList : null
  },
  //事件处理函数
  bindArticleView: function(e) {
    wx.navigateTo({
      url: "/pages/article/article?id=" + e.currentTarget.dataset.id
    })
  },

  // 初始化体验谈
  initReviewList : function(){
    this.setData({
      reviewList : [
        {
          id:1,
          src:'/assets/images/sample/sample-8.jpg',
          title:'好的生命磁场从感恩开始，慈恩天下天园介绍之感恩园 （二）'
        },
        {
          id:2,
          src:'/assets/images/sample/sample-7.jpg',
          title:'《慈恩天下》七周年，孝亲祭祖，绽放中华文化魅力！'
        },
        {
          id:3,
          src:'/assets/images/sample/sample-6.jpg',
          title:'齐聚宝物与果实，为生命磁场注入富贵之气，慈恩天下天园介绍之富贵园（一）'
        },
        {
          id:4,
          src:'/assets/images/sample/sample-5.jpg',
          title:'绿色环保或将代表未来祭祖祈福方式的主流'
        },
        {
          id:5,
          src:'/assets/images/sample/sample-4.jpg',
          title:'吉祥恒久远，慈恩天下天园介绍之吉祥园'
        },
        {
          id:6,
          src:'/assets/images/sample/sample-3.jpg',
          title:'赋予生命磁场的正能量，让生活更幸福'
        },
        {
          id:7,
          src:'/assets/images/sample/sample-2.jpg',
          title:'绿色环保或将代表未来祭祖祈福方式的主流'
        },
        {
          id:8,
          src:'/assets/images/sample/sample-1.jpg',
          title:'网络祭祀受到80后90后偏爱'
        },
      ]
    })
  },


  clickNav : function(e){
    this.goNav(e.currentTarget.dataset.index)
  },

  
  goNav : function(i){
    this.setData({
      navIndex : i
    })
    switch(i){
      case 0: // article
        break;
      case 1: // review
        if(this.data.reviewList==null){
          this.initReviewList();
        }
        break;
      case 2: // memo
        break;
      case 3: // news
        break;
    }
  },

  bindSwiperChange : function(e){
    this.goNav(e.detail.current)
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '慈恩堂'
    })

    var self = this;

    wx.showLoading({title:'正在加载...'})
    setTimeout(function(){
      self.setData({
        articleList : [
          {
            id:1,
            src:'/assets/images/sample/sample-1.jpg',
            title:'好的生命磁场从感恩开始，慈恩天下天园介绍之感恩园 （二）'
          },
          {
            id:2,
            src:'/assets/images/sample/sample-2.jpg',
            title:'《慈恩天下》七周年，孝亲祭祖，绽放中华文化魅力！'
          },
          {
            id:3,
            src:'/assets/images/sample/sample-3.jpg',
            title:'齐聚宝物与果实，为生命磁场注入富贵之气，慈恩天下天园介绍之富贵园（一）'
          },
          {
            id:14,
            src:'/assets/images/sample/sample-4.jpg',
            title:'绿色环保或将代表未来祭祖祈福方式的主流'
          },                  
        ]
      })
      wx.hideLoading()
    },1000);


  },

  onShow: function(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 'home'
      })
    }
  },

})