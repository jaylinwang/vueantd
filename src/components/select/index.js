import Select from './src/Select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

const install = (Vue) => {
  Vue.install(Select.name, Select)
  Vue.install(Option.name, Option)
  Vue.install(OptionGroup.name, OptionGroup)
}

export {
  install,
  Select,
  Option,
  OptionGroup
}
