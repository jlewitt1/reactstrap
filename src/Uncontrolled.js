import React from 'react';
import Alert from './Alert';
import ButtonDropdown from './ButtonDropdown';
import Dropdown from './Dropdown';
import NavDropdown from './NavDropdown';
import Tooltip from './Tooltip';

const { Component } = React;
const components = {
  UncontrolledAlert: Alert,
  UncontrolledButtonDropdown: ButtonDropdown,
  UncontrolledDropdown: Dropdown,
  UncontrolledNavDropdown: NavDropdown,
  UncontrolledTooltip: Tooltip,
};

Object.keys(components).forEach(key => {
  const Tag = components[key];
  const defaultValue = Tag === Alert;

  /**
   * @description Uncontrolled - For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. Does not require isOpen nor toggle props to work.
   * @example 
   * import React from 'react';
   * import { UncontrolledAlert } from 'reactstrap';
   *
   * function AlertExample() {
   *   return (
   *     <UncontrolledAlert color="info">
   *       I am an alert and I can be dismissed!
   *     </UncontrolledAlert>
   *   );
   * }
   * 
   * export default AlertExample;
   */
  class Uncontrolled extends Component {
    constructor(props) {
      super(props);

      this.state = { isOpen: defaultValue };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
      return <Tag isOpen={this.state.isOpen} toggle={this.toggle} {...this.props} />;
    }
  }

  Uncontrolled.displayName = key;

  components[key] = Uncontrolled;
});

const UncontrolledAlert = components.UncontrolledAlert;
const UncontrolledButtonDropdown = components.UncontrolledButtonDropdown;
const UncontrolledDropdown = components.UncontrolledDropdown;
const UncontrolledNavDropdown = components.UncontrolledNavDropdown;
const UncontrolledTooltip = components.UncontrolledTooltip;

export {
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  UncontrolledNavDropdown,
  UncontrolledTooltip,
};
