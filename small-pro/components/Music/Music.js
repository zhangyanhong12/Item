// components/Music/Music.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   data:{
     type:Object
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
      
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleToggle(){
      var id = this.properties.data.id;
      var picUrl = escape(this.properties.data.coverImgUrl);
      wx.navigateTo({
        url: '/pages/music-detail/music-detail?id='+id +'&picUrl='+picUrl,
        
      })
     
    }
  }
})
