import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'li'
};

/**
 * @description Nav Item
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

const NavItem = (props) => {
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
    <Tag {...attributes} className={classes} />
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
