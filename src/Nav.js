import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.bool} tabs
   */
  tabs: PropTypes.bool,
  /**
   * @property {PropTypes.bool} pills
   */
  pills: PropTypes.bool,
  /**
   * @property {PropTypes.bool} vertical
   */
  vertical: PropTypes.bool,
  justified: PropTypes.bool,
  /**
   * @property {PropTypes.bool} navbar
   */
  navbar: PropTypes.bool,
  /**
   * @property {PropTypes.func|PropTypes.string} - pass in custom element to use
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ul'
};
/**
 * @description Nav
 * @example
 * import React from 'react';
 * import { Nav, NavItem, NavLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 * render() {
 *   return (
 *     <div>
 *       <p>List Based</p>
 *       <Nav>
 *         <NavItem>
 *           <NavLink href="#">Link</NavLink>
 *         </NavItem>
 *         <NavItem>
 *           <NavLink href="#">Link</NavLink>
 *         </NavItem>
 *         <NavItem>
 *           <NavLink href="#">Another Link</NavLink>
 *         </NavItem>
 *         <NavItem>
 *           <NavLink disabled href="#">Disabled Link</NavLink>
 *         </NavItem>
 *       </Nav>
 *       <hr />
 *       <p>Link Based</p>
 *       <Nav>
 *         <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
 *       </Nav>
 *     </div>
 *   );
 * }
 *}
 */
const Nav = (props) => {
  const {
    className,
    cssModule,
    tabs,
    pills,
    vertical,
    justified,
    navbar,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    navbar ? 'navbar-nav' : 'nav',
    {
      'nav-tabs': tabs,
      'nav-pills': pills,
      'nav-justified': justified,
      'flex-column': vertical
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
