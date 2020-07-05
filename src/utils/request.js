// 请求器实例，挂载于window._request
import axios from 'axios'
import qs from 'qs'
import { prodApi } from '../../my-config'

var config = {
  timeout: 7000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },

  transformRequest: qs.stringify
}

var axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? prodApi : '/api',
  ...config
})

axiosInstance.interceptors.request.use(requestDataHandler)
axiosInstance.interceptors.response.use(responseDataHandler)

// 拦截器的写法请参考 @see https://www.kancloud.cn/yunye/axios/234845#_395

// 请求拦截器
function requestDataHandler(req){

  return req
}

// 响应拦截器
function responseDataHandler(res){

  return res.data
}

export default axiosInstance