/* --- 数据控制层 --- 
 * 该层接收来自page的请求数据
 * 经过前置数据基本的逻辑验证、判断后
 * 请求接口层数据，数据返回成功后，作
 * 进一步的逻辑处理，将原始数据处理成
 * 前台页面所需的数据格式
 * 
 * 注：
 * 1、该层方法名对应接口层方法名
 * 2、该层方法名可不与前台页面一一对应
 * 
 * 依赖接口层模块
 */
var models = require('../../models/models.js')
var tools = require('../../tools/tools.js')
var indexITF = require('../../interfaces/index/indexITF.js')

var indexController = {
  getIndexData: (data) => {
    return indexITF.getIndexData(data).then((results)=>{
      return new Promise((resolve) => {
        // 处理 results 数据，整理格式后输出
        if(results.code != 200){
          results.data = {}
        }
        resolve(results)
      })
    }, models.failHandle)
  },
  getIndexUser: (data) => {
    return indexITF.getIndexUser(data).then((results) => {
      results = Object.assign({}, results)
      return new Promise((resolve) => {
        // 处理 results 数据，整理格式后输出
        if (results && results.code != 200 && tools.isObject(results)) {
          results.data = {
            name: 'admin'
          }
        }
        resolve(results)
      })
    }, models.failHandle)
  }
}

module.exports = indexController