import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.bool} active
   */
  active: PropTypes.bool,
  /**
   * @property {PropTypes.bool} block
   */
  block: PropTypes.bool,
  /**
   * @property {PropTypes.string} color - default: 'secondary'
   */
  color: PropTypes.string,
  /**
   * @property {PropTypes.bool} disabled 
   */
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  /**
   * @property {PropTypes.func|PropTypes.string} tag - Passes in a component to override default button element (ex: react-router link)
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.func} onClick
   */
  onClick: PropTypes.func,
  /**
   * @property {PropTypes.string} size
   */
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  color: 'secondary',
  tag: 'button',
};

/**
 * @description Buttons
 * @example 
 * import React from 'react';
 * import { Button } from 'reactstrap'; 
 *
 * export default class Example extends React.Component {
 *   render() {
 *       return (
 *       <div>
 *           <Button color="primary">primary</Button>{' '}
 *           <Button color="secondary">secondary</Button>{' '}
 *         <Button color="success">success</Button>{' '}
 *         <Button color="info">info</Button>{' '}
 *           <Button color="warning">warning</Button>{' '}
 *           <Button color="danger">danger</Button>{' '}
 *         <Button color="link">link</Button>
 *         </div>
 *     );
 *   }
 * }
 *   
 */

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      active,
      block,
      className,
      cssModule,
      color,
      outline,
      size,
      tag: Tag,
      getRef,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'btn',
      `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      block ? 'btn-block' : false,
      { active, disabled: this.props.disabled }
    ), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={getRef}
        onClick={this.onClick}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
