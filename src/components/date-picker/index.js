import DatePicker from './src/picker.vue'

const install = (Vue) => {
  Vue.component(DatePicker.name, DatePicker)
}

export {
  install,
  DatePicker
}
