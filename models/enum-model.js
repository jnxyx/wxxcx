// 枚举模型
var enumModel = {
  getNameByType: (type) => {
    return {
      "break": "早餐",
      "lunch": "中餐",
      "supper": "晚餐",
    }[type]
  }
}

module.exports = enumModel