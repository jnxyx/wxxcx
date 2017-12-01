//index.js
//获取应用实例
var indexCtrl = require('../../controllers/index/indexController.js')
const tools = require('../../tools/tools.js')
const memory = require('../../memory/memory.js')
const app = getApp()

Page({
  data: {},
  onLoad: function () {
    this.getDataFromBack()
  },
  linkToShop: function(e) {
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },
  // 数据测试
  getDataFromBack: function() {
    indexCtrl.getIndexData().then((results)=>{
      console.log(results)
    })

    var data1 = {
      code: 100,
      data: {
        name: 'xuyunxiang'
      }
    }
    indexCtrl.getIndexUser(data1).then((results) => {
      console.log(data1)
      console.log(results)
    })

    var data2 = {
      code: 200,
      data: {
        name: 'xuyunxiang'
      }
    }
    indexCtrl.getIndexUser(data2).then((results) => {
      console.log(results)
    })

    indexCtrl.getIndexUser(1).then((results) => {
      console.log(results)
      return indexCtrl.getIndexUser(++results)
    }).then((results) => {
      console.log(results)
      return indexCtrl.getIndexUser(++results)
    }).then((results) => {
      console.log(results)
      return indexCtrl.getIndexUser(++results)
    }).then((results) => {
      console.log(results)
      return indexCtrl.getIndexUser(++results)
    })

    var copyData = {
      name: 'xuyunxiang'
    }
    console.log('copy 测试:', tools.copy(copyData))
    console.log('merge 测试:', tools.merge(copyData, {a: 11}))

    memory.setData('totalNum', 11)
  }
})
