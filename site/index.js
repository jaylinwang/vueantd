import Vue from 'vue'
import VueRouter from 'vue-router'
import AntdVue from '../components/index'
import DemoBlock from './components/demo_block.vue'
import HeadNav from './components/head_nav.vue'
import Component from './pages/component.vue'
import Home from './pages/home.vue'
import DocOutline from './config/outline'

const routerList = []
DocOutline.list.forEach((o1) => {
  o1.children.forEach((o2) => {
    if (o2.source) {
      routerList.push({
        path: o2.source,
        component: require(`../docs/${o2.source}.md`)
      })
    }
  })
})

Vue.use(VueRouter)
Vue.use(AntdVue)
Vue.component('demo-block', DemoBlock)

const routes = [{
  path: '/home',
  components: {
    headnav: HeadNav,
    default: Home
  }
}, {
  path: '/component',
  components: {
    headnav: HeadNav,
    default: Component
  },
  children: routerList
}, {
  path: '/',
  redirect: '/component'
}]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
