import Input from './src/input.vue'

const install = function (Vue) {
  Vue.component(Input.name, Input)
}

export {
  install,
  Input
}
