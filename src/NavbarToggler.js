import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag - pass in custom element to use
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.string} type
   */
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  /**
   * @property {PropTypes.bool} right
   */
  right: PropTypes.bool,
  /**
   * @property {PropTypes.bool} left
   */
  left: PropTypes.bool,
};

const defaultProps = {
  tag: 'button',
  type: 'button'
};

/**
 * @description NavBar Toggler
 * @example 
 * import React from 'react';
 * import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     this.toggleNavbar = this.toggleNavbar.bind(this);
 *     this.state = {
 *       collapsed: true
 *     };
 *   }
 * 
 *   toggleNavbar() {
 *     this.setState({
 *       collapsed: !this.state.collapsed
 *     });
 *   }
 *   render() {
 *     return (
 *       <div>
 *         <Navbar color="faded" light>
 *           <NavbarToggler onClick={this.toggleNavbar} />
 *           <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
 *             <NavbarBrand href="/">reactstrap</NavbarBrand>
 *             <Nav navbar>
 *               <NavItem>
 *                 <NavLink href="/components/">Components</NavLink>
 *               </NavItem>
 *               <NavItem>
 *                 <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
 *               </NavItem>
 *             </Nav>
 *           </Collapse>
 *         </Navbar>
 *       </div>
 *     );
 *   }
 * } 
 */
const NavbarToggler = (props) => {
  const {
    className,
    cssModule,
    children,
    right,
    left,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-toggler',
    right && 'navbar-toggler-right',
    left && 'navbar-toggler-left'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      {children || <span className={mapToCssModules('navbar-toggler-icon', cssModule)} />}
    </Tag>
  );
};

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
