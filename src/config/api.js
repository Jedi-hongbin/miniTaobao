import { Message } from 'element-ui'
import request from '@u/request.js'
import { apiList, netWorkErrorMsg } from '../api.js'

var requests = {}

apiList.forEach(add)

// 检查是否有重复命名的api方法
if(process.env.NODE_ENV === 'development'){
  var methodNames = apiList.map(val => val.name)

  while(methodNames.length){
    var name = methodNames.pop()
    if(methodNames.includes(name)){ throw new Error('重复的api方法命名：' + name) }
  }
}


/**
 * 添加api方法，方便统一管理，挂载于window._api
 * @author 张振东
 * @param {object} options 配置对象，以下为配置对象的各字段。 ** 一般不需要直接使用该函数 **
 * name       {string} 调用该接口的方法名
 * url        {string} 接口路径，不包括base路径
 * method     {string} 方式，get or post，默认get
 * apiParams  {object} 传入一个对象，为调用该接口时的默认参数，当使用时传入的参数与默认参数冲突时，默认参数将被覆盖
 * loading    {string} 调用接口时启用loading提示，默认为false，当传入一个字符串时，将显示该文字
 * msg        {bool, string} 出现错误时(接口返回result字段为false，或网络超时)，弹出提示
 *                           msg = true：当result为false时，文字使用message字段内容。超时时，文字使用“网络错误”
 *                           msg = 字符串：result为false时，显示该字符串。超时时同上
 * resultMode {bool} 接口返回的数据以result字段作为主体时使用（如获取收藏状态等），直接返回result
 */
function add({
  name,
  url,
  method = 'get',
  apiParams = {},   
  msg = false,
  loading = false,
  resultMode = false
}){
  requests[name] = function(params = {}, options = {}){
    return new Promise((resolve, reject) =>{
      params = { ...apiParams, ...params }
      loading && Message(loading + '...')
      request({
        url, method,
        ...({ [method === 'get' ? 'params' : 'data']: params }),
      })
      .then(data =>{
        if(resultMode){
          resolve(data.result)
        }else{
          if(data.result) resolve(data.ret)
          else{
            msg && Message({ type: 'error', message: data.message })
            reject(data)
          }
        }
      }).catch(e =>{
        console.log(e)
        msg && Message({ type: 'error', message: netWorkErrorMsg })
        reject()
      })
    })
  }
}


/**
 * 发送请求
 * @author 张振东
 * @param {object} params  接口参数
 * @param {object} options 可选，接口配置，用来在使用时覆盖设置loading和msg，参见上方add函数的说明
 * @return {promise} 成功时(result == true)：resolve，返回ret字段
 *                   失败时(result == false)：reject，返回整个请求主体
 *                   超时时：reject，无返回
 */

window._api = requests

