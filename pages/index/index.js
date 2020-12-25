//index.js

const util = require("../../utils/util")
const config = require("../../utils/config")

//获取应用实例
const app = getApp()

Page({
  data: {
    navIndex : 0,
    articleList : null,
    reviewCategoryList : null,
    reviewList : null,
    memoList : null,
    showMemoMoreButtonsId : null
  },
  // 事件处理函数
  // 点击慈恩堂文章
  bindArticleView: function(e) {
    wx.navigateTo({
      url: "/pages/article/article?id=" + e.currentTarget.dataset.id
    })
  },

  // 点击体验谈文章
  bindReviewView: function(e) {
    wx.navigateTo({
      url: "/pages/review/review?id=" + e.currentTarget.dataset.id
    })
  },

  // 点击心情墙的更多(...)按钮
  bindClickMemoMore: function(e){
    var id = e.currentTarget.dataset.id
    if(id == this.data.showMemoMoreButtonsId){
      this.setData({showMemoMoreButtonsId : null});
    }else{
      this.setData({showMemoMoreButtonsId : id});
    }
  },

  initArticleList : function(){
    this.setData({
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
  },

  // 初始化体验谈
  initReviewList : function(){
    this.setData({
      reviewCategoryList : [
        {id:1,name:'家庭'},
        {id:2,name:'姻缘'},
        {id:3,name:'亲子'},
        {id:4,name:'健康'},
        {id:5,name:'学业'},
        {id:6,name:'事业'},
        {id:7,name:'财富'}
      ],
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

  // 初始化心情墙
  initMemoList : function(){
    this.setData({
      memoList : [
        {
          id:1,
          avatar:'/assets/images/avatar/1.jpg',
          nick:'大富贵',
          month:null,
          day:'今天',
          feeling:'very-happy',
          text:"哇塞~\n心情美美哒~\n哇哈哈哈~",
          like:2039,
          liked:false,
          comment:14,
          photos:[
            {src:'/assets/images/sample/sample-1.jpg'},
            {src:'/assets/images/sample/sample-2.jpg'},
            {src:'/assets/images/sample/sample-3.jpg'}
          ]
        },
        {
          id:2,
          avatar:'/assets/images/avatar/2.jpg',
          nick:'招财进宝避灾得福',
          month:7,
          day:'20',
          feeling:'happy',
          text:"哇塞~\n心情美美哒~\n哇哈哈哈~",
          like:2039,
          liked:true,
          comment:14,
          photos:[
            {src:'/assets/images/sample/sample-4.jpg'},
            {src:'/assets/images/sample/sample-5.jpg'}
          ]
        },
        {
          id:3,
          avatar:'/assets/images/avatar/1.jpg',
          nick:'大富贵',
          month:6,
          day:'30',
          feeling:'sad',
          text:"好伤心啊~",
          like:2039,
          liked:false,
          comment:14,
          photos:[
            {src:'/assets/images/sample/sample-6.jpg'}
          ]
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
          this.initReviewList()
        }
        break;
      case 2: // memo
        if(this.data.messageList==null){
          this.initMemoList()
        }
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
    this.initArticleList()
    wx.navigateTo({
      url: "/pages/write/write"
    })
  },

  onShow: function(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 'home'
      })
    }
  },

})