import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired
};

/**
 * @description Dropdown Menu - The DropdownMenu can automatically be flipped (dropup vs dropdown) according to space available in the viewport by passing the tether prop to Dropdown <Dropdown tether />. For full customization, an object with Tether options can be used instead.
 * @example
 * <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}> 
 * <DropdownToggle caret>
 *   Dropdown
 * </DropdownToggle>
 * <DropdownMenu right>
 *   <DropdownItem header>Header</DropdownItem>
 *   <DropdownItem disabled>Action</DropdownItem>
 *   <DropdownItem>Another Action</DropdownItem>
 *   <DropdownItem divider/>
 *   <DropdownItem>Another Action</DropdownItem>
 * </DropdownMenu>
 * </Dropdown>
 * 
 */

const DropdownMenu = (props, context) => {
  const { className, cssModule, right, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    { 'dropdown-menu-right': right }
  ), cssModule);

  return (
    <Tag {...attributes} tabIndex="-1" aria-hidden={!context.isOpen} role="menu" className={classes} />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;
