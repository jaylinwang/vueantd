import Vue from 'vue'
import VueRouter from 'vue-router'
import AntdVue from '../src/components'
import '../src/styles/index.scss'

Vue.use(VueRouter)
Vue.use(AntdVue)

const routes = [{
  path: '/',
  component: require('./home/index.vue')
}, {
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
}, {
  path: '/badge',
  component: require('./badge/index.vue')
}, {
  path: '/backtop',
  component: require('./backtop/index.vue')
}, {
  path: '/tag',
  component: require('./tag/index.vue')
}, {
  path: '/alert',
  component: require('./alert/index.vue')
}, {
  path: '/modal',
  component: require('./modal/index.vue')
}, {
  path: '/tooltip',
  component: require('./tooltip/index.vue')
}, {
  path: '/progress',
  component: require('./progress/index.vue')
}, {
  path: '/menu',
  component: require('./menu/index.vue')
}, {
  path: '/layout',
  component: require('./layout/index.vue')
}, {
  path: '/form',
  component: require('./form/index.vue')
}, {
  path: '/date-picker',
  component: require('./date-picker/index.vue')
}, {
  path: '/table',
  component: require('./table/index.vue')
}, {
  path: '/pagination',
  component: require('./pagination/index.vue')
}]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
