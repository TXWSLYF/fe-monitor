const tools = {
  /**
   * @description 代理头信息
   */
  AGENT: navigator.userAgent,

  readXHRbody(xhr: XMLHttpRequest) {
    if (!xhr.responseType || xhr.responseType === 'text') {
      return xhr.responseText
    } else if (xhr.responseType === 'document') {
      return xhr.responseXML
    } else {
      return xhr.response
    }
  },

  /**
   * @description 发送ajax请求
   */
  ajax(url: string, params: any, successFun: (data: any) => void, errorFun: (data: any) => void) {
    const xhr = new XMLHttpRequest()
    const { readXHRbody } = this
    if (Array.isArray(params) && params.length === 1) {
      params = params[0]
    }
    params = JSON.stringify(params)

    xhr.open('POST', url, true)

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        successFun && successFun(readXHRbody(xhr))
      }
    }
    xhr.onerror = () => {
      if (errorFun) {
        errorFun(readXHRbody(xhr))
      }
    }
    xhr.setRequestHeader('Content-type', 'application/json')

    try {
      xhr.send(params)
    } catch (e) {
      if (errorFun) {
        errorFun(readXHRbody(xhr))
      }
    }
  }
}

export default tools
