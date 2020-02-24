// pages/detail/detail.js
Page({

 
  data: {

  },

  onLoad: function (options) {

  },

 handleToggle(){
   wx.switchTab({
     url: '/pages/read/read',
    
   });
 }
})