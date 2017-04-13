// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

const api = Axios.create({
  responseType: 'json',
  baseURL: 'http://cors-proxy.htmldriven.com/?url=https://www.reddit.com'
})

Vue.prototype.api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
