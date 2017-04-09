import Input from './src/input.vue';
import '../style/input/index.scss';

const install = function(Vue){
  Vue.component(Input.name, Input);
}

export {
  install,
  Input,
}
