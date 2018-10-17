// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {$axios} from './utils'
import store from './store'
/* 引入轮播图组件 */
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
/* 使用轮播图组件 */
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)

Vue.prototype.$axios = $axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
