// app 配置信息
let {name, version, environment, devHost, onlineHost} = {
  name: '微信小程序',
  version: '0.0.1',
  environment: 'dev', // 'online'
  devHost: 'http://www.qq.com',        // '开发接口主域'
  onlineHost: 'http://www.qq.com'      // '线上接口主域'
}

const host = environment === 'dev' ? devHost : onlineHost

module.exports = { name, version, environment, host}