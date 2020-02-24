// pages/my/my.js
Page({
  data: {
    imageUrl:"/images/avatar/5.png",
    longitude:114.502880,
    latitude:30.553670,
    scale:18,
    showcompass:true,
    markers: [{
      iconPath: "/images/icon/位置.png",
      id: 0,
      latitude: 30.553670,
      longitude: 114.502880,
      width: 30,
      height: 30,
      label:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      },
      callout:{
        content:"极客营科技有限公司",
        color:"#EE5E7B",
        borderWidth:1,
        borderColor:"#EE5E78",
        borderRadius:5,
        padding:5,
      }
    }],
    polyline: [{
      points: [{
        longitude: 114.502880,
        latitude: 30.553670
      }, {
        longitude: 114.372640,
        latitude: 30.689160
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    circles:
    [
      {
        longitude: 114.502880,
        latitude: 30.553670,
        radius: 50,
        fillColor: "#C20C0C66"
      }
    ]
  },

  onLoad: function (options) {

  },
  handleImage(){
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success:(res)=>{
        const src = res.tempFilePaths[0]
        this.setData({
          imageUrl:src
        })
      },
    
    })
  }
})