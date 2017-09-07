import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag - pass in custom element to use
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'a'
};

/**
 * @description NavBar Brand
 * @example 
 * 
 * import React from 'react';
 * import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     this.toggle = this.toggle.bind(this);
 *     this.state = {
 *       isOpen: false
 *     };
 *   }
 *   toggle() {
 *     this.setState({
 *       isOpen: !this.state.isOpen
 *     });
 *   }
 *   render() {
 *     return (
 *       <div>
 *         <Navbar color="faded" light toggleable>
 *           <NavbarToggler right onClick={this.toggle} />
 *           <NavbarBrand href="/">reactstrap</NavbarBrand>
 *           <Collapse isOpen={this.state.isOpen} navbar>
 *             <Nav className="ml-auto" navbar>
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

const NavbarBrand = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'navbar-brand'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
