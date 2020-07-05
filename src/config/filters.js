// 过滤器
import Vue from 'vue'

Vue.filter('date', val => val.split(' ')[0])