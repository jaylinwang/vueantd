import { Row, Col } from './grid';
import { Icon } from './icon';
import { Button, ButtonGroup } from './button';
import { Input } from './input';
import { Dropdown, DropdownMenu, DropdownItem } from './dropdown';

const install = function (Vue) {
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Icon.name, Icon);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Input.name, Input);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownMenu.name, DropdownMenu);
  Vue.component(DropdownItem.name, DropdownItem);
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
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
};
