//index.js
//获取应用实例
var indexCtrl = require('../../controllers/indexController.js')
const memory = require('../../memory/memory.js')

Page({
  data: {
  },
  onLoad: function () {
    wx.navigateTo({
      url: '/pages/byte/byte'
    })
  }
})
