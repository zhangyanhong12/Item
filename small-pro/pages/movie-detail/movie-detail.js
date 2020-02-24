// pages/movie-detail/movie-detail.js
const Http = require("../../lib/Http")
Page({

  data: {
     subjects:[]
  },
  onLoad: async function (options) {
   var {title,ntitle} = options;
   wx.showLoading({
    title:"数据正在加载"
  })
   console.log(ntitle)
  
    switch(title){
      
      case "in_theaters":
          wx.setNavigationBarTitle({
            title:ntitle,
          });
         
       var res = await Http.getInTheaters() 
       var {subjects} = res.data
       this.setData({
         subjects
       })
      
        break;
        case "coming_soon":
            wx.setNavigationBarTitle({
              title:ntitle,
            })
            var res = await Http.getCommingSoon()
            var {subjects} = res.data
            this.setData({
              subjects
            })
          break;
          case "top250":
              wx.setNavigationBarTitle({
                title:ntitle,
              })
              var res = await Http.getTop250() 
              var {subjects} = res.data
              this.setData({
                subjects
              })
            break;
    }
   wx.hideLoading()
  },

})