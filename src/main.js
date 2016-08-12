import 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.css'
// import 'assets/style.css'
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

/* eslint-disable no-new */

router.map({
  '/': {
    component: App
  },
  '/about': {
    component: App
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
