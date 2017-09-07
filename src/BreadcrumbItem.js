import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'li'
};

/**
 * @description Breadcrumb Item
 * @example 
 * import React from 'react';
 * import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <div>
 *       <Breadcrumb tag="nav">
 *         <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
 *         <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
 *         <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
 *         <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
 *       </Breadcrumb>
 *     </div>
 *   );
 * };
 *
 * export default Example;
 */

const BreadcrumbItem = (props) => {
  const {
    className,
    cssModule,
    active,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
