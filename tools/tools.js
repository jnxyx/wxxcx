/* 工具对象
 * 为业务提供支持
 * 
 */
var baseTool = require('./base-tool.js')
var dateTool = require('./date-tool.js')

var tools = Object.assign({}, baseTool, dateTool)

module.exports = tools