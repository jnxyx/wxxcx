//logs.js
const tools = require('../../tools/tools.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return tools.formatTime(new Date(log))
      })
    })
  }
})
