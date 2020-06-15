import tools from './tool'
import feMonitorConfig from './config'

class SubmitPool {
  // 提交数据池
  dataPool = []
  // 初始提交时间间隔
  interval = 2000
  // 提交时间增长间隔
  step = 2000
  // 是否处于运行中
  isRunning = false
  // 每次提交数目限制
  limit = 1

  start() {
    const { isRunning, step, limit } = this
    let interval = this.interval
    if (isRunning) return

    this.isRunning = true

    const submitData = () => {
      setTimeout(() => {
        const { dataPool } = this

        if (dataPool.length > 0) {
          const submitDatas = dataPool.splice(0, limit)
          tools.ajax(
            feMonitorConfig.requestUrl,
            submitDatas,
            () => {},
            () => {
              // 提交失败，重新推入队列
              dataPool.push(...submitDatas)
            }
          )
        } else {
          interval += step
        }

        submitData()
      }, interval)
    }

    submitData()
  }
}

const submitPool = new SubmitPool()

export default submitPool
