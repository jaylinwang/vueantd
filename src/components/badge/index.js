import Badge from './src/badge.vue'

const install = (Vue) => {
  Vue.components(Badge.name, Badge)
}

export {
  install,
  Badge
}
