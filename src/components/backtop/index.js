import '../style/backtop/index.scss'
import Backtop from './src/backtop.vue'

const install = (Vue) => {
  Vue.component(Backtop.name, Backtop)
}

export {
  install,
  Backtop
}
