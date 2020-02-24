const https =require("../../lib/https")
Page({

  
  data: {
 playlists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    var {url,title} = options;
    switch(url){
      case "getHot":
        var res = await https.getHot()
       var {playlists} = res.data
       this.setData({
        playlists
      })
       break;
      case "getPlaylist":
        var res = await https.getPlaylist()
       var {playlists} = res.data
       this.setData({
        playlists
      })
       break;
      case "getDj":
        var res = await https.getDj()
          var result = res.data.result
          var playlists=[]
          result.forEach(item=>{
            var obj = {}
            obj.name = item.name;
            obj.coverImgUrl=item.picUrl;
            obj.playCount = item.program.listenerCount;
            obj.id =item.id
            playlists.push(obj)
           })
           this.setData({
            playlists
          })
           break;
       
    }
  },

  
})