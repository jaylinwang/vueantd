import '../style/tag/index.scss'
import Tag from './src/tag.vue'

const install = (Vue) => {
  Vue.component(Tag.name, Tag)
}

export {
  install,
  Tag
}
