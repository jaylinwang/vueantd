import Vue from 'vue'
import VueRouter from 'vue-router'
import AntdVue from '../src/index'

Vue.use(VueRouter)
Vue.use(AntdVue)

const routes = [{
  path: '/grid',
  component: require('./grid/index.vue')
}, {
  path: '/button',
  component: require('./button/index.vue')
}, {
  path: '/icon',
  component: require('./icon/index.vue')
}, {
  path: '/breadcrumb',
  component: require('./breadcrumb/index.vue')
}, {
  path: '/dropdown',
  component: require('./dropdown/index.vue')
}, {
  path: '/notification',
  component: require('./notification/index.vue')
}, {
  path: '/message',
  component: require('./message/index.vue')
}, {
  path: '/input',
  component: require('./input/index.vue')
}, {
  path: '/checkbox',
  component: require('./checkbox/index.vue')
}, {
  path: '/radio',
  component: require('./radio/index.vue')
}, {
  path: '/select',
  component: require('./select/index.vue')
}, {
  path: '/switch',
  component: require('./switch/index.vue')
}]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
