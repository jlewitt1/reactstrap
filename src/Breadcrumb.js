import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ol'
};

/**
 * @description Breadcrumb
 * @example 
 * import React from 'react';
 * import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

 * const Example = (props) => {
 * return (
 *   <div>
 *     <Breadcrumb>
 *       <BreadcrumbItem active>Home</BreadcrumbItem>
 *     </Breadcrumb>
 *     <Breadcrumb>
 *       <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
 *       <BreadcrumbItem active>Library</BreadcrumbItem>
 *     </Breadcrumb>
 *     <Breadcrumb>
 *       <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
 *       <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
 *       <BreadcrumbItem active>Data</BreadcrumbItem>
 *     </Breadcrumb>
 *   </div>
 *  );
 * };
 *
 *  export default Example;
 */

const Breadcrumb = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'breadcrumb'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
