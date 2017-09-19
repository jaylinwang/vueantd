import Menu from './src/menu.vue'
import Submenu from './src/submenu.vue'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'

const install = (Vue) => {
  Vue.component(Menu.name, Menu)
  Vue.component(Submenu.name, Submenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(MenuItemGroup.name, MenuItemGroup)
}

export {
  install,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
}
