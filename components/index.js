import { Row, Col } from './grid';
import { Icon } from './icon';
import { Button, ButtonGroup } from './button';

const install = function (Vue) {
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Icon.name, Icon);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Row,
  Col,
  Icon,
  Button,
  ButtonGroup,
};
