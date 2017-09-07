import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.bool} light
   */
  light: PropTypes.bool,
  /**
   * @property {PropTypes.bool} inverse
   */
  inverse: PropTypes.bool,
  /**
   * @property {PropTypes.bool} full
   */
  full: PropTypes.bool,
  /**
   * @property {PropTypes.string} fixed
   */
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  /**
   * @property {PropTypes.string} color
   */
  color: PropTypes.string,
  /**
   * @property {PropTypes.string} role
   */
  role: PropTypes.string,
  /**
   * @property {PropTypes.func|PropTypes.string} tag - pass in custom element to use
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.bool|PropTypes.string} toggleable
   */
  toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const defaultProps = {
  tag: 'nav',
  toggleable: false,
};

const getToggleableClass = (toggleable) => {
  if (toggleable === false) {
    return false;
  } else if (toggleable === true || toggleable === 'xs') {
    return 'navbar-toggleable';
  }

  return `navbar-toggleable-${toggleable}`;
};
/**
 * @description Navbar
 * @example
 * import React from 'react';
 * import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 * constructor(props) {
 *   super(props);
 *
 *   this.toggle = this.toggle.bind(this);
 *   this.state = {
 *      isOpen: false
 *    };
 *  }
 * toggle() {
 *   this.setState({
 *     isOpen: !this.state.isOpen
 *   });
 * }
 * render() {
 *   return (
 *     <div>
 *       <Navbar color="faded" light toggleable>
 *         <NavbarToggler right onClick={this.toggle} />
 *         <NavbarBrand href="/">reactstrap</NavbarBrand>
 *         <Collapse isOpen={this.state.isOpen} navbar>
 *           <Nav className="ml-auto" navbar>
 *             <NavItem>
 *               <NavLink href="/components/">Components</NavLink>
 *             </NavItem>
 *             <NavItem>
 *               <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
 *             </NavItem>
 *           </Nav>
 *         </Collapse>
 *       </Navbar>
 *     </div>
 *   );
 * }
 *}
 */
const Navbar = (props) => {
  const {
    toggleable,
    className,
    cssModule,
    light,
    inverse,
    full,
    fixed,
    sticky,
    color,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar',
    getToggleableClass(toggleable),
    {
      'navbar-light': light,
      'navbar-inverse': inverse,
      [`bg-${color}`]: color,
      'navbar-full': full,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
