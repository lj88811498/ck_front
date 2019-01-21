// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import _ from 'lodash'
import iView from 'iview'
import api from './api/index'
import 'iview/dist/styles/iview.css'    // 使用 CSS

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$http = axios
Vue.prototype.api = api
Vue.prototype._ = _
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
