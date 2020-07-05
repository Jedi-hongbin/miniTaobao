import * as qiniu from 'qiniu-js'
import { qiniuSpace } from '../../my-config'

/**
 * 上传图片至七牛
 * @author 张振东
 * @param {file} file 文件对象 
 * @return {promise} resolve：上传成功后的该图片地址。reject：失败信息，具体见七牛jssdk文档
 */
export default function(file){
  return new Promise((resolve, reject) =>{
    // 具体请根据接口返回数据格式进行修改
    _request({ url: 'common/getQiniuToken' })     
    .then(({ret: token}) =>{
      var key = 'image/' + new Date().getTime() + file.name 
      var obs = qiniu.upload(file, key, token)
      var cb = {
        complete: ({key}) => resolve(qiniuSpace + key),
        error: reject
      }
      obs.subscribe(cb)
    })
  })
}