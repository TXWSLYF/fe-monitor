export interface IInitFeMonitorConfigData {
  key: string
  requestUrl?: string
  slowReqTime?: number
}

class FeMonitorConfig {
  // 唯一id
  key: string = ''
  // 日志发送地址
  requestUrl: string = 'https://www.demo.com/log/performance'
  // 慢请求阀值，超过该阀值的网路请求才会被统计到
  slowReqTime: number = 800

  /**
   * @description 初始化配置
   */
  init({ key, requestUrl, slowReqTime }: IInitFeMonitorConfigData) {
    this.key = key

    if (requestUrl) {
      this.requestUrl = requestUrl
    }

    if (slowReqTime) {
      this.slowReqTime = slowReqTime
    }
  }
}

const feMonitorConfig = new FeMonitorConfig()

export default feMonitorConfig
