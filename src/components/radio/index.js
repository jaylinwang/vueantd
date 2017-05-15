import '../style/radio/index.scss'
import Radio from './src/radio.vue'

const install = (Vue) => {
  Vue.components(Radio.name, Radio)
}

export {
  install,
  Radio
}
