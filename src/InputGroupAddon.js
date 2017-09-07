import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

/**
 * @description Input Group Add-On
 * @example 
 * import React from 'react';
 * import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <div>
 *       <InputGroup>
 *         <InputGroupAddon>To the Left!</InputGroupAddon>
 *         <Input />
 *       </InputGroup>
 *       <br />
 *       <InputGroup>
 *         <Input />
 *         <InputGroupAddon>To the Right!</InputGroupAddon>
 *       </InputGroup>
 *       <br />
 *       <InputGroup>
 *         <InputGroupAddon>To the Left!</InputGroupAddon>
 *         <Input placeholder="and..." />
 *         <InputGroupAddon>To the Right!</InputGroupAddon>
 *       </InputGroup>
 *     </div>
 *   );
 * };
 * 
 * export default Example;
 */

const InputGroupAddon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group-addon'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
