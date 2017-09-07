import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';
import Button from './Button';

const propTypes = {
  /**
   *  @property {PropTypes.func|PropTypes.string} tag
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.node} children
   */
  children: PropTypes.node,
  /**
   * @property {PropTypes.string} groupClassName - only used in shorthand
   */
  groupClassName: PropTypes.string,
  /**
   * @property {PropTypes.object} groupAttributes - only used in shorthand
   */
  groupAttributes: PropTypes.object,
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
 * @description Input Group Button
 * @example 
 * import React from 'react';
 * import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';
 * import ButtonDropdownExample from './ButtonDropdown';
 *
 * const Example = (props) => {
 *   return (
 *     <div>
 *       <InputGroup>
 *         <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
 *         <Input />
 *       </InputGroup>
 *       <br />
 *       <InputGroup>
 *         <Input />
 *         <InputGroupButton><ButtonDropdownExample /></InputGroupButton>
 *       </InputGroup>
 *       <br />
 *       <InputGroup>
 *         <InputGroupButton><ButtonDropdownExample /></InputGroupButton>
 *         <Input placeholder="and..." />
 *         <InputGroupButton><Button color="secondary">I'm a button</Button></InputGroupButton>
 *       </InputGroup>
 *     </div>
 *   );
 * };
 * 
 * export default Example;
 * 
 */

const InputGroupButton = (props) => {
  let {
    className,
    cssModule,
    tag: Tag,
    children,
    groupClassName,
    groupAttributes,
    ...attributes
  } = props;

  if (typeof children === 'string') {
    const groupClasses = mapToCssModules(classNames(
      groupClassName,
      'input-group-btn'
    ), cssModule);

    return (
      <Tag {...groupAttributes} className={groupClasses}>
        <Button {...attributes} className={className} children={children} />
      </Tag>
    );
  }

  const classes = mapToCssModules(classNames(
    className,
    'input-group-btn'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} children={children} />
  );
};

InputGroupButton.propTypes = propTypes;
InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
