/* --- 数据模型层 ---
 * 该层并非对应页面的视图模型
 * 而是为特定业务，
 * 提供统一的数据格式
 * 
 * 包括：
 * 1、接口返回的数据；
 * 2、逻辑验证不合格的数据回调；
 * 3、一些公用的枚举；
 * .
 * .
 * .
 * 等等
 * 
 * 注明：该层仅提供支持，不依赖任何模块（建议提供对控制层的支持）
 */

var models = {
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
  getNameByType: (type) => {
    return {
      "break": "早餐",
      "lunch": "中餐",
      "supper": "晚餐",
    }[type + '']
  },
  failHandle: (fails) => {
    return new Promise((resolve) => {
      resolve(models.getFailData())
    })
  }
}

module.exports = models