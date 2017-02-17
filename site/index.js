import Vue from 'vue';
import VueRouter from 'vue-router';
import AntdVue from '../components/index';


import DemoBlock from './components/demo_block.vue';
import HeadNav from './components/head_nav.vue';
import Component from './pages/component.vue';
import Home from './pages/home.vue';

const routerList = [{
  path: 'grid',
  component: require('../docs/grid.md'),
}, {
  path: 'icon',
  component: require('../docs/icon.md'),
}];

Vue.use(VueRouter);
Vue.use(AntdVue);

Vue.component('demo-block', DemoBlock);

const routes = [{
  path: '/home',
  components: {
    headnav: HeadNav,
    default: Home,
  },
}, {
  path: '/component',
  components: {
    headnav: HeadNav,
    default: Component,
  },
  children: routerList,
}, {
  path: '/',
  redirect: '/component'
}];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#app');
