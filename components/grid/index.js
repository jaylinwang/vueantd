import '../style/grid/index.scss';

import Row from './script/row.vue';
import Col from './script/col.vue';

const install = function (Vue) {
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
};

export {
  install,
  Row,
  Col,
};
