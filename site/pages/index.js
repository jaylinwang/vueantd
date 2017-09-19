import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './home/index.vue'
import Component from './component/index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/component'
}, {
  path: '/home',
  component: Home
}, {
  path: '/component',
  component: Component
}]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  components: {
    App
  }
})
app.$mount('#root')
