/* 工具对象
 * 为业务提供支持
 * 
 * 
 * 
 */

// 基础工具
// 提供数组，对象，日期判断
// 提供对象属性长度判断
var baseTool = {
  isArray: (arg) => {
    return arg.constructor === Array
  },
  isObject: (arg) => {
    return arg.constructor === Object
  },
  isKeyEmptyObject: (arg) => {
    if(!baseTool.isObject(arg)){
      throw new Error('参数有误，请传Object类型值')
    }
    return Object.keys(arg).length > 0
  },
  isDate: (arg) => {
    return arg.constructor === Date
  },
  copy: (object) => {
    if (!baseTool.isObject(object) && !baseTool.isArray(object)){
      return object
    }
    return JSON.parse(JSON.stringify(object))
  },
  merge: (...args) => {
    return baseTool.copy(Object.assign.apply({}, args))
  }
}

// 日期工具
// 提供日期格式化操作
// 提供过期验证
var dateTool = {
  // 格式化日期
  formatTime: (date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    let formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  },
  // 过期验证
  isExpire: (timeStamp, startDate, endDate) => {
    if (!endDate) {
      endDate = new Date()
    }
    if (baseTool.isDate(startDate) && baseTool.isDate(endDate)) {
      return endDate - startDate < +timeStamp
    } else {
      throw new Error('参数有误，请传Date类型值')
    }
  }
}

var tools = Object.assign({}, baseTool, dateTool)

module.exports = tools