/* 数据记忆
 * 
 * 
 */
const tools = require('../tools/tools.js')

var memory = {
  data: {},
  init: ()=>{
    memory.data = getApp() ? getApp().globalData : memory.data
  },
  getData: (key) => {
    memory.init()
    if('string' !== typeof key){
      throw new Error('参数有误，请传String类型值')
    }
    if (memory.data.hasOwnProperty(key)) {
      return tools.copy(memory.data[key])
    }
  },
  setData: (key, value) => {
    memory.init()
    if ('string' !== typeof key) {
      throw new Error('参数有误，键名请传String类型值')
    }
    memory.data[key] = tools.copy(value)
    return value
  },
  removeData: (key) => {
    memory.init()
    if ('string' !== typeof key) {
      throw new Error('参数有误，键名请传String类型值')
    }
    if (memory.data.hasOwnProperty(key)) {
      delete memory.data[key]
    }
  }
}

module.exports = memory