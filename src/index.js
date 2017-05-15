import { Row, Col } from './components/grid'
import { Icon } from './components/icon'
import { Button, ButtonGroup } from './components/button'
import { Input } from './components/input'
import { Dropdown, DropdownMenu, DropdownItem } from './components/dropdown'
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb'
import { Notification } from './components/notification'
import { Checkbox, CheckboxGroup } from './components/checkbox'

const install = function (Vue) {
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Icon.name, Icon)
  Vue.component(Button.name, Button)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Input.name, Input)
  Vue.component(Dropdown.name, Dropdown)
  Vue.component(DropdownMenu.name, DropdownMenu)
  Vue.component(DropdownItem.name, DropdownItem)
  Vue.component(Breadcrumb.name, Breadcrumb)
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(CheckboxGroup.name, CheckboxGroup)

  Vue.prototype.$notification = Notification
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Row,
  Col,
  Icon,
  Button,
  ButtonGroup,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Notification,
  Checkbox,
  CheckboxGroup
}
