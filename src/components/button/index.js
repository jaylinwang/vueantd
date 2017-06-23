import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(ButtonGroup.name, Button)
}

export {
  install,
  Button,
  ButtonGroup
}
