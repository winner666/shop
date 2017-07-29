// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'

// import consultation from './components/consultation'
import MintUI from 'mint-ui'
//import '../node_modules/mint-ui/lib/style.css'//最嗨的是他这个直接引入的是一个css文件

import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(MintUI)

// 使用router
Vue.use(Router)


const http="http://192.168.0.125:8078";

let Api={
  user:()=>{
    return axios.post('${http}/main/user');//首页接口
  },
  shop:()=>{
    return axios.post('${http}/user/periphery/shop');//推荐商家详情
  }
}








//实例化路由

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
