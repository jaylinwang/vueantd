import { Row, Col } from './grid';
import Icon from './icon';

const install = function (Vue) {
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Icon.name, Icon);

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Row,
  Col,
  Icon,
};
