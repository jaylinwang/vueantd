import '../style/alert/index.scss'
import Alert from './src/alert.vue'

const install = (Vue) => {
  Vue.components(Alert.name, Alert)
}

export {
  install,
  Alert
}
