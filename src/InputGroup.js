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
   * @property {PropTypes.string} size
   */
  size: PropTypes.string,
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
 * @description Input Group
 * @example
 * import React from 'react';
 * import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
 * 
 *const Example = (props) => {
 *  return (
 *   <div>
 *     <InputGroup>
 *       <InputGroupAddon>@</InputGroupAddon>
 *       <Input placeholder="username" />
 *     </InputGroup>
 *     <br />
 *     <InputGroup>
 *       <InputGroupAddon>
 *         <Input addon type="checkbox" aria-label="Checkbox for following text input" />
 *       </InputGroupAddon>
 *        <Input placeholder="Check it out" />
 *      </InputGroup>
 *     <br />
 *     <InputGroup>
 *       <Input placeholder="username" />
 *       <InputGroupAddon>@example.com</InputGroupAddon>
 *     </InputGroup>
 *     <br />
 *     <InputGroup>
 *       <InputGroupAddon>$</InputGroupAddon>
 *       <InputGroupAddon>$</InputGroupAddon>
 *       <Input placeholder="Dolla dolla billz yo!" />
 *       <InputGroupAddon>$</InputGroupAddon>
 *       <InputGroupAddon>$</InputGroupAddon>
 *     </InputGroup>
 *     <br />
 *     <InputGroup>
 *       <InputGroupAddon>$</InputGroupAddon>
 *       <Input placeholder="Amount" type="number" step="1" />
 *       <InputGroupAddon>.00</InputGroupAddon>
 *     </InputGroup>
 *   </div>
 *   );
 * };
 *
 * export default Example;
 */
const InputGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'input-group',
    size ? `input-group-${size}` : null
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
