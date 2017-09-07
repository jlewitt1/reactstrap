import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.string} ariaLabel
   */
  'aria-label': PropTypes.string,
  /**
   * @property {PropTypes.string} className 
   */
  className: PropTypes.string,
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.string} role
   */
  role: PropTypes.string,
  /**
   * @property {PropTypes.string} size
   */
  size: PropTypes.string,
  /**
   * @property {PropTypes.bool} vertical
   */
  vertical: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
  role: 'group',
};

/**
 * @description Button Group
 * @example 
 * import React from 'react';
 * import { Button, ButtonGroup } from 'reactstrap';
 * export default class Example extends React.Component {
 *  render() {
 *    return (
 *      <ButtonGroup>
 *        <Button>Left</Button>{' '}
 *        <Button>Middle</Button>{' '}
 *        <Button>Right</Button>
 *      </ButtonGroup>
 *    );
 *  }
 * }
 */
const ButtonGroup = (props) => {
  const {
    className,
    cssModule,
    size,
    vertical,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    size ? 'btn-group-' + size : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
