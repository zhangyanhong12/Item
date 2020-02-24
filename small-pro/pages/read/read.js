// pages/read/read.js
var data = require('../../data/local');
var http = require("../../models/http")

Page({
  data: {
    indicatorColor:"rgba(11, 44, 66, .6)",
    indicatorDots:true,
    active:"#C20C2C",
    banners:[],
    autoplay: true,
    postList:[],
  },
  onLoad: async function (options) {
    var {bannerUrl,postList} = data;
    var res = await http(bannerUrl);
    var banners  = res.data.banners.slice(0,3);
    this.setData({
      banners,
      postList
    })
  }
})