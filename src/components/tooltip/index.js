import '../style/tooltip/index.scss'
import Tooltip from './src/tooltip.vue'

const install = (Vue) => {
  Vue.component(Tooltip.name, Tooltip)
}

export {
  install,
  Tooltip
}
