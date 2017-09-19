import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

const install = (Vue) => {
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
}

export {
  install,
  Collapse,
  CollapseItem
}
