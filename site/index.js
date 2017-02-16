import Vue from 'vue';
import VueRouter from 'vue-router';
import Vantd from '../components/index';


import DemoBlock from './components/demo_block.vue';
import HeadNav from './components/head_nav.vue';
import Component from './script/component.vue';
import Home from './script/home.vue';

let routerList = [{
  path: '',
  component: require('../docs/grid.md'),
}];

Vue.use(VueRouter);
Vue.use(Ae);

Vue.component('demo-block', DemoBlock);

const routes = [{
  path: '/',
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
}];

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes,
});

new Vue({
  router,
}).$mount('#app');
