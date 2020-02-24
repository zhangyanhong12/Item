// pages/music-detail/music-detail.js
const https = require("../../lib/https")
Page({
  data:{
    musics:[],
    isPlay:false,
    playId:""
  },
  onShow(){
    var playState = wx.getStorageSync('playState');
    var playId = wx.getStorageSync('playId') 
    if(playState!=null){
      this.setData({
        isPlay:playState
      })
    }
    this.setData({
      playId
    })
 },
  onLoad:async function(options){
    var id = options.id;
    var picUrl = unescape(options.picUrl);
    var res = await https.getDetail(id)
    var tracks = res.data.playlist.tracks;
    var musics = []
    tracks.forEach(item=>{
      var obj={};
      obj.name=item.name;
      obj.picUrl=item.al.picUrl;
      obj.imgUrl=picUrl;
      obj.id=item.id
      musics.push(obj)
    })
    this.setData({
      musics
    })
    
  },
  handlePlay(e){
    var id = e.currentTarget.dataset.id;
    var pic = escape(e.currentTarget.dataset.pic);
    var name = e.currentTarget.dataset.name;
    console.log(pic)
    wx.navigateTo({
      url: '/pages/play/play?id='+id +'&pic='+pic+'&name='+name,
     
    })
  },
 
})