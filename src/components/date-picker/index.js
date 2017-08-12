import DatePicker from './src/date-picker.vue'

const install = (Vue) => {
  Vue.component(DatePicker.name, DatePicker)
}

export {
  install,
  DatePicker
}
