import defaultFeMonitorConfig, { IInitFeMonitorConfigData } from './base/config'

export default class FeMonitor {
  constructor(config: IInitFeMonitorConfigData) {
    defaultFeMonitorConfig.init(config)
  }
}
