Component({
  options: {
    addGlobalClass: true
  },
  data: {
    selected : ""
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      const url = data.url
      wx.switchTab({url})
    },
    bindWrite : function(){
      wx.navigateTo({
        url: "/pages/write/write"
      })
    }    
  }
})