import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

const install = (Vue) => {
  Vue.components(Radio.name, Radio)
  Vue.components(RadioGroup.name, RadioGroup)
}

export {
  install,
  Radio,
  RadioGroup
}
