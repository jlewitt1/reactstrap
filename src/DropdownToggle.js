import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import Button from './Button';

const propTypes = {
  /**
   * @property {PropTypes.bool} caret
   */
  caret: PropTypes.bool,
  /**
   * @property {PropTypes.string} color
   */
  color: PropTypes.string,
  children: PropTypes.node,
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.bool} disabled
   */
  disabled: PropTypes.bool,
  /**
   * @property {PropTypes.func} onClick
   */
  onClick: PropTypes.func,
  /**
   * @property {PropTypes.string} data-toggle
   */
  'data-toggle': PropTypes.string,
  /**
   * @property {PropTypes.bool} aria-haspopup 
   */
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  /**
   * @property {PropTypes.any} tag - defaults to Button component
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.bool} nav -  For DropdownToggle usage inside a Nav
   */
  nav: PropTypes.bool,
};

const defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle();
  }

  render() {
    const { className, color, cssModule, caret, split, nav, tag, ...props } = this.props;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    const classes = mapToCssModules(classNames(
      className,
      {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav
      }
    ), cssModule);
    const children = props.children || <span className="sr-only">{ariaLabel}</span>;

    let Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    return (
      <Tag
        {...props}
        className={classes}
        onClick={this.onClick}
        aria-haspopup="true"
        aria-expanded={this.context.isOpen}
        children={children}
      />
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;
