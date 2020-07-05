import Vue from 'vue'
import Router from 'vue-router'
import guard from './guard'

import Index from '@v/Index.vue'

Vue.use(Router)

// 用于放在meta中的标记
const keepAlive = true,       // 带缓存路由 
fromUrlStop = true            // 直接从url进入时，将被导航至home

// 设置路由path和name
// 为什么使用这种模式：合并路由的path和name，确保每个路由必有name。因为从url直接访问一个页面它的route.name必然为null，
// 以此判断是否从url直接进入
function p(name, path){
  return {
    path: `/${path ? path : name}`,
    name,
    meta: {}  // 防止未设置meta造成取到undefined的情况
  }
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: { keepAlive }         // 设置路由缓存
  }, {
    ...p('my'),     // 这个就相当于同时设置 path: '/my', name: 'my'
    component: () => import('@v/my/Index')      // 路由懒加载
  }, {
    ...p('weitao'),
    component: () => import('@v/weitao/Index')      // 路由懒加载
  }, {
    ...p('info'),
    component: () => import('@v/info/Index')      // 路由懒加载
  }, {
    ...p('shoppingCar'),
    component: () => import('@v/shoppingCar/Index')      // 路由懒加载
  }, {
    path: '/goodsInfo/:id',
    name: 'goodsInfo',
    meta: {},
    component: () => import('@v/goodsInfo/index')     // 路由懒加载
  }
]

// guard为路由实例添加全局守卫
export default guard(new Router({
  mode: 'history',
  routes
}))
