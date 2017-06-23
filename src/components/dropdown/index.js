import Dropdown from './src/dropdown.vue'
import DropdownMenu from './src/dropdown-menu.vue'
import DropdownItem from './src/dropdown-item.vue'

const install = (Vue) => {
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(DropdownMenu.name, DropdownMenu)
  Vue.component(DropdownItem.name, DropdownItem)
}

export {
  install,
  Dropdown,
  DropdownMenu,
  DropdownItem
}
