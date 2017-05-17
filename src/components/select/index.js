import '../style/select/index.scss'
import Select from './src/Select.vue'
import Option from './src/option.vue'

const install = (Vue) => {
  Vue.install(Select.name, Select)
  Vue.install(Option.name, Option)
}

export {
  install,
  Select,
  Option
}
