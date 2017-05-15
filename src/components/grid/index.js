import '../style/grid/index.scss'
import Row from './src/row.vue'
import Col from './src/col.vue'

const install = function (Vue) {
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
}

export {
  install,
  Row,
  Col
}
