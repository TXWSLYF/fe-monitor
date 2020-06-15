import defaultFeMonitorConfig, { IInitFeMonitorConfigData } from './base/config'
import page from './lib/page'
import submitPool from './base/submitPool'

export default class FeMonitor {
  constructor(config: IInitFeMonitorConfigData) {
    defaultFeMonitorConfig.init(config)
    page.submit()
    submitPool.start()
  }
}
