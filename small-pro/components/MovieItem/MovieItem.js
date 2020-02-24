// components/MovieItem/MovieItem.js
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
        wx.navigateTo({
          url: '/pages/movies/movies?id='+id,
         
        })
      }
  }
})
