import Icon from './src/icon.vue'

const install = (Vue) => {
  Vue.component(Icon.name, Icon)
}

export {
  install,
  Icon
}
