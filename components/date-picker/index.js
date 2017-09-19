import DatePicker from './src/date-picker.vue'
import MonthPicker from './src/month-picker.vue'

const install = (Vue) => {
  Vue.component(DatePicker.name, DatePicker)
  Vue.component(MonthPicker.name, MonthPicker)
}

export {
  DatePicker,
  MonthPicker
}

export default {
  install
}
