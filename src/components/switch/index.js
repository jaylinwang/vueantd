import '../style/switch/index.scss'
import Switch from './src/switch.vue'

const install = (Vue) => {
  Vue.component(Switch.name, Switch)
}

export {
  install,
  Switch
}
