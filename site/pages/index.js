import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAntd from 'components/index'

import Home from './home/index.vue'
import Component from './component/index.vue'
import DemoBlock from '../widget/demo-block.vue'
import 'components/styles/main/index.scss'
import 'site/assets/style/entry/index.scss'

Vue.use(VueRouter)
Vue.use(VueAntd)
Vue.component(DemoBlock.name, DemoBlock)
const routes = [{
  path: '/',
  redirect: '/component'
}, {
  path: '/home',
  component: Home
}, {
  path: '/component',
  component: Component,
  children: [{
    path: 'icon',
    component: require('docs/icon/index.md')
  }, {
    path: 'button',
    component: require('docs/button/index.md')
  }]
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
