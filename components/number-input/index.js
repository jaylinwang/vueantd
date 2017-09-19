import NumberInput from './src/number-input.vue'

const install = (Vue) => {
  Vue.component(NumberInput.name, NumberInput)
}

export {
  install,
  NumberInput
}
