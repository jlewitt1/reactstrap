import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import Dropdown from './Dropdown';
import DropdownToggle from './DropdownToggle';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'li'
};

/**
 * @description Nav Dropdown
 * @example
 * 
 * import React from 'react';
 * import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     this.toggle = this.toggle.bind(this);
 *     this.state = {
 *       dropdownOpen: false
 *     };
 *   }
 * 
 *   toggle() {
 *     this.setState({
 *       dropdownOpen: !this.state.dropdownOpen
 *     });
 *   }
 * 
 *   render() {
 *     return (
 *       <div>
 *         <Nav pills>
 *           <NavItem>
 *             <NavLink href="#" active>Link</NavLink>
 *           </NavItem>
 *           <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
 *             <DropdownToggle nav caret>
 *               Dropdown
 *             </DropdownToggle>
 *             <DropdownMenu>
 *               <DropdownItem header>Header</DropdownItem>
 *               <DropdownItem disabled>Action</DropdownItem>
 *               <DropdownItem>Another Action</DropdownItem>
 *               <DropdownItem divider />
 *               <DropdownItem>Another Action</DropdownItem>
 *             </DropdownMenu>
 *           </NavDropdown>
 *           <NavItem>
 *             <NavLink href="#">Link</NavLink>
 *           </NavItem>
 *           <NavItem>
 *             <NavLink href="#">Another Link</NavLink>
 *           </NavItem>
 *           <NavItem>
 *             <NavLink disabled href="#">Disabled Link</NavLink>
 *           </NavItem>
 *         </Nav>
 *       </div>
 *     );
 *   }
 * } 
 */

const NavDropdown = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'nav-item'
  ), cssModule);

  return (
    <Dropdown {...attributes} tag={Tag} className={classes} />
  );
};

NavDropdown.propTypes = propTypes;
NavDropdown.defaultProps = defaultProps;

export default NavDropdown;
