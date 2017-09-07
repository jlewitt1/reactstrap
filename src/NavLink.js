import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag - pass in custom element to use
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.bool} disabled
   */
  disabled: PropTypes.bool,
  /**
   * @property {PropTypes.bool} active
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any,
};

const defaultProps = {
  tag: 'a',
};

/**
 * @description Nav Link
 * @example 
 * import React from 'react';
 * import { Nav, NavItem, NavLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   render() {
 *     return (
 *       <div>
 *         <p>List Based</p>
 *         <Nav>
 *           <NavItem>
 *             <NavLink href="#">Link</NavLink>
 *           </NavItem>
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
 *         <hr />
 *         <p>Link Based</p>
 *         <Nav>
 *           <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
 *         </Nav>
 *       </div>
 *     );
 *   }
 * }
 */

class NavLink extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      className,
      cssModule,
      active,
      tag: Tag,
      getRef,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'nav-link',
      {
        disabled: attributes.disabled,
        active: active
      }
    ), cssModule);

    return (
      <Tag {...attributes} ref={getRef} onClick={this.onClick} className={classes} />
    );
  }
}

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
