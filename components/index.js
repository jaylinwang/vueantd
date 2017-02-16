import { Row, Col } from './grid';

const install = function (Vue) {
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Row,
  Col,
};
