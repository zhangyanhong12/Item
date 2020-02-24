const https = require("../../lib/https")
Page({
  data: {
   music:{
     
   }
  },
  onLoad: async function (options) {
   var music={}
   var getHot = await https.getHot()
   var getPlaylist = await https.getPlaylist()
   var getDj = await https.getDj()
  


   music.getHot={}
   music.getHot.title="热门歌曲";
   music.getHot.data = getHot.data.playlists.slice(0,3);
   music.getHot.subTitle = "getHot"

   music.getPlaylist={}
   music.getPlaylist.title="最新音乐";
   music.getPlaylist.data = getPlaylist.data.playlists.slice(0,3);
   music.getPlaylist.subTitle = "getPlaylist"

   music.getDj={}
   music.getDj.title="主播电台";
   var result = getDj.data.result;
   var sub=[]
   result.forEach(item=>{
    var obj = {}
    obj.name = item.name;
    obj.coverImgUrl=item.picUrl;
    obj.playCount = item.program.listenerCount;
    obj.id =item.id
    sub.push(obj)
   })
   console.log(sub)
   music.getDj.data = sub.slice(0,3)
   music.getDj.subTitle = "getDj"
   this.setData({
     music
   })
  },
   handleClick(e){
     var {title,url} = e.currentTarget.dataset;
     wx.navigateTo({
      url: `/pages/musics/musics?title=${title}&url=${url}`
     })
     console.log(url)
   }
})