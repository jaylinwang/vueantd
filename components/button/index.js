import '../style/button/index.scss';
import Button from './src/button.vue';

const install = (Vue) => {
  Vue.component(Button.name, Button);
}

export {
  install,
  Button,
}
