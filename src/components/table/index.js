import Table from './src/table.vue'

const install = (Vue) => {
  Vue.component(Table.name, Table)
}

export {
  install,
  Table
}
