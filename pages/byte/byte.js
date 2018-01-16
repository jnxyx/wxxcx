// pages/byte/byte.js
Page({
  data: {
    // 字节长度
    byte: 4,
    // 行数
    lineLength: 5,
    timer: null,
    // 基础字符串
    baseString: '0123456789ABCDEF',
    // 二进制数组
    byteArray:[]
  },
  onLoad: function (options) {
    // this.start()
  },
  onShareAppMessage: function () {
  
  },
  start: function () {
    let timer = setInterval(() => {
      this.createRandomArray()
    }, 1000 / 10)
    this.setData({
      timer: timer
    })
  },
  stop: function () {
    clearInterval(this.data.timer)
  },
  // 创建随机数组
  createRandomArray: function () {
    let byteArray = []
    let byteLength = this.data.byte // * 8
    let lineLength = this.data.lineLength
    for (let i = 0; i < lineLength; i++) {
      let byteItem = ''
      for (let j = 0; j < byteLength; j++) {
        let random = parseInt(Math.pow(2, 8) * Math.random()) % Math.pow(2, 8)
        random = random.toString(2)
        random = '0'.repeat(8 - random.length) + random
        byteItem += random
        // byteItem.push(random)
      }
      byteArray.push(byteItem)
    }
    this.setData({
      byteArray: byteArray
    })
  }
})