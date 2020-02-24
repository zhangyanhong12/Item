// pages/movies/movies.js
const Http = require("../../lib/Http")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{},
    x:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
     var id = options.id;
     console.log(id)
     var res = await Http.getDetail(id)
     
     this.setData({
       movie:res.data
     })
   
  },
  handleImage(e){
    var url = e.currentTarget.dataset.url;
    var casts =this.data.movie.casts;
    var urls = casts.map(item=>{
      return item.avatars.small;
    })
    wx.previewImage({
      current: url, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls
    })
  }
})