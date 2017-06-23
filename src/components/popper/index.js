import Popper from './src/popper.vue'

const install = (Vue) => {
  Vue.component(Popper.name, Popper)
}

export {
  install,
  Popper
}
