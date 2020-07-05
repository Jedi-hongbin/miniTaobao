// api方法声明，所有方法都挂载于 window._api对象上
// 拦截器请在 src/utils/request.js 配置
// 关于请求的细节请查看 src/config/api.js

// 这两个方法本质上就是返回一个对象，可以根据需要自行增加修改
const get = (name, url, config) => ({ name, url, method: 'get', ...config })
const post = (name, url, config) => ({ name, url, method: 'post', ...config }) 

// 网络错误时message的提示文字
const netWorkErrorMsg = '网络错误'

const apiList = [
  // 以下为示例

  // 单纯地调用接口(接口名, 接口路径[不包含base路径])
  get('getIndexData', 'index/home'),

  // 调用该接口时，将显示loading，并在返回的result字段为false或调用接口失败时，提示对应信息
  get('getIndexData2', 'index/home', { loading: '加载中', msg: true }),

  // 调用该接口时，将显示loading并在下方显示文字“加载中”，并在result为false时，显示“加载首页信息失败”的提示
  post('getIndexData3', 'index/home', { loading: '加载中', msg: '加载首页信息失败' }),

  // 这会将接口返回的result字段作为数据传回，用于将result用作判断状态的情况（例如使用result字段判断收藏状态等）
  get('getIndexData4', 'index/home', { resultMode: true }),

  // 为接口设置一个默认的参数
  get('getIndexData5', 'index/home', { resultMode: true, apiParams: { level: 1 } })
]

export { netWorkErrorMsg, apiList }

/**
 * 发送请求
 * @author 张振东
 * @param {object} params  接口参数
 * @param {object} options 可选，接口配置，用来在使用时覆盖设置loading和msg，参见上方add函数的说明
 * @return {promise} 成功时(result == true)：resolve，返回ret字段
 *                   失败时(result == false)：reject，返回整个请求主体
 *                   超时时：reject，无返回
 *                   设置了resultMode时：resolve，返回result字段；超时时reject，无返回
 * @example
 *  _api.getIndexData({ level: 1 })
 * .finally(() =>{
 *    console.log('无论成功失败，只要返回了状态就调用') 
 * })
 * .then(data =>{
 *    console.log('成功时调用')
 *    console.log(data)
 *  })
 * .catch(error =>{
 *    console.log('失败或then中抛出了错误时调用')
 *    console.log(error)
 *  })
 */

 /** 关于设置msg显示的提示
  * msg == true：当接口result为false时，文字使用message字段内容。超时时，文字使用变量 netWorkErrorMsg 的文字
  * msg == 字符串：当接口result为false时，显示该字符串。超时时同上
  */