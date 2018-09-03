// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'
import VueLazyLoad from 'vue-lazyload'


Vue.use(Vuex)
Vue.use(router)
Vue.use(VueLazyLoad,{
  loading:'./static/img/timg.jpg'
})
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$Storage = localStorage

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
})
