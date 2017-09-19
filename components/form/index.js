import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

const install = (Vue) => {
  Vue.component(Form.name, Form)
  Vue.component(FormItem.name, FormItem)
}

export {
  install,
  Form,
  FormItem
}
