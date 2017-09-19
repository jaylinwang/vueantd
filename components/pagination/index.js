import Pagination from './src/pagination.vue'

const install = (Vue) => {
  Vue.component(Pagination.name, Pagination)
}

export {
  install,
  Pagination
}
