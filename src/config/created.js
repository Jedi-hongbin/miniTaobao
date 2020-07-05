// 根实例的created

// 用于获取基本数据，传入一个返回延迟对象的函数(使用在vuex里定义的action)，获取失败后重新尝试获取，最多尝试5次
function getBaseData(getDataHandler){
  return new Promise((resolve, reject) =>{
    var getCount = 0
    ;(function exec(){ 
      getDataHandler()
      .then(resolve)
      .catch(() => ++getCount < 6 ? exec() : reject())
    })()
  })
}

export default function(){
  
}