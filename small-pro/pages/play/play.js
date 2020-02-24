// pages/play/play.js
const https = require("../../lib/https")

const audio = wx.getBackgroundAudioManager()
Page({
  data: {
    isPlay:true,
    name:"",
    pic:""
  },
  onLoad:async function (options) {
     var id =options.id;
     var pic= unescape(options.pic);
     var name=options.name
     var res = await https.getPlay(id)
     var url=res.data.data[0].url;
     audio.title=name;
     audio.src=url;
     wx.setStorageSync('playState',true)
     wx.setStorageSync('playId',id)
     this.setData({
       name,
       pic
     })
    audio.onPlay(()=>{
      this.setData({
        isPlay:true
      })
      wx.setStorageSync('playState', true)
    })
    audio.onPause(()=>{
      this.setData({
        isPlay:false
      })
      wx.setStorageSync('playState', false)
    })
    
  },
  handlePlay() {
    if (this.data.isPlay) {
      this.setData({
        isPlay: !this.data.isPlay
      })
      wx.setStorageSync('playState', false)
      audio.pause() 
    } else {
      this.setData({
        isPlay: this.data.isPlay
      })
      wx.setStorageSync('playState', true)
      audio.play()
    }
  }
})