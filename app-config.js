// app 配置信息
let { environment, devHost, onlineHost} = {
  environment: 'dev', // 'online'
  // '开发接口主域'
  devHost: {
  },
  // '线上接口主域'
  onlineHost: {
  }
}

let appType = 'miniApp'

const host = environment === 'dev' ? devHost : onlineHost

module.exports = {
  name: 'app name',
  // 小程序版本
  appVersion: '1.0.1',
  // 项目版本
  version: '3.9.0',
  platform: 'wxapp',
  device: 'sssss',
  environment: environment, // 'online'
  host: host,
  appType: appType,
  mapConfig: {
    key: '665191cd743a43a9',
    appType: appType
  }
}