import Collector from '../base/Collector'

class Page extends Collector {
  submit() {
    const { performance } = window
    if (!performance) return

    const onload = window.onload

    window.onload = (event: Event) => {
      if (onload && typeof onload === 'function') {
        onload.call(window, event)
      }

      const {
        domainLookupStart,
        domainLookupEnd,
        connectStart,
        connectEnd,
        requestStart,
        responseStart,
        responseEnd,
        domInteractive,
        domContentLoadedEventEnd,
        loadEventStart,
        fetchStart
      } = performance.timing

      // dns查询耗时
      const dns = domainLookupEnd - domainLookupStart
      // tcp链接耗时
      const tcp = connectEnd - connectStart
      // 网络请求耗时
      const ttfb = responseStart - requestStart
      // 数据传输耗时
      const trans = responseEnd - responseStart
      // dom解析耗时
      const dpt = domInteractive - responseEnd
      // 资源加载时间
      const resLoadTime = loadEventStart - domContentLoadedEventEnd
      // 首包时间（First byte time）
      const fbt = responseStart - domainLookupStart
      // 白屏时间
      const blankTime = responseEnd - fetchStart
      // 首次可交互时间（Time to Interact）
      const tti = domInteractive - fetchStart
      // DOM Ready 时间（domContentLoadedTime）
      const dct = domContentLoadedEventEnd - fetchStart
      // 页面完全加载时间
      const finishTime = loadEventStart - fetchStart

      const pagePerformanceData = {
        dns,
        tcp,
        ttfb,
        trans,
        dpt,
        resLoadTime,
        fbt,
        blankTime,
        tti,
        dct,
        finishTime
      }

      this.submitPool.push(pagePerformanceData)
    }
  }
}

const page = new Page()

export default page
