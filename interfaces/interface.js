/*
 *  请求数据操作封装
 *  get   方法执行get操作
 *  post  方法执行post操作
 *  
 *  提供 resolveRequestData 方法处理特殊请求头
 */

var inferface = {
  get: (url, data) => {
    let options = {
      url: url,
      data: data || {},
      method: 'get'
    }
    return inferface.request(options)
  },
  post: (url, data) => {
    let options = {
      url: url,
      data: data || {},
      method: 'post'
    }
    return inferface.request(options)
  },
  request: (options) => {
    let promise = new Promise((resolve, reject) => {
      let requestArgs = {
        url: options.url,
        data: options.data,
        header: {},
        method: options.method,
        dataType: 'json',
        success: function (res) { resolve(res) },
        fail: function (res) { reject(res) }
      }
      wx.request(requestArgs)
    })
    return promise
  },
  tsPost: (url, data) => {
    let promise = new Promise((resolve) => {
      resolve(data)
    });
    return promise;
  },
  resolveRequestData: () => {
    return {}
  }
}

module.exports = inferface