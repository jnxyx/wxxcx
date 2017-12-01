// 回调返回值模型
var returnModel = {
  getSuccesData: (data) => {
    let successData = {
      data: {},
      code: 200,
      msg: '请求成功'
    }
    return Object.assign({}, successData, data)
  },
  getFailData: () => {
    let failData = {
      data: {},
      code: 400,
      msg: '请求失败'
    }
    return Object.assign({}, failData)
  },
  getValiData: (msg) => {
    let valiData = {
      data: {},
      code: 0,
      msg: msg || '数据不合法'
    }
    return Object.assign({}, valiData)
  },
  failHandle: (fails) => {
    return new Promise((resolve) => {
      resolve(returnModel.getFailData())
    })
  }
}

module.exports = returnModel