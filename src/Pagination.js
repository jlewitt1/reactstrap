import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.node} children
   */
  children: PropTypes.node,
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.string} size
   */
  size: PropTypes.string,
  /**
   * @property {PropTypes.func|PropTypes.string} tag
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'ul',
};

/**
 * @description pagination
 * @example 
 * import React from 'react';
 * import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 * render() {
 *   return (
 *     <Pagination>
 *       <PaginationItem>
 *         <PaginationLink previous href="#" />
 *       </PaginationItem>
 *       <PaginationItem>
 *         <PaginationLink href="#">
 *           1
 *         </PaginationLink>
 *       </PaginationItem>
 *       <PaginationItem>
 *         <PaginationLink href="#">
 *           2
 *         </PaginationLink>
 *       </PaginationItem>
 *       <PaginationItem>
 *         <PaginationLink href="#">
 *           3
 *         </PaginationLink>
 *       </PaginationItem>
 *       <PaginationItem>
 *         <PaginationLink href="#">
 *           4
 *         </PaginationLink>
 *       </PaginationItem>
 *       <PaginationItem>
 *         <PaginationLink href="#">
 *           5
 *         </PaginationLink>
 *       </PaginationItem>
 *       <PaginationItem>
 *         <PaginationLink next href="#" />
 *       </PaginationItem>
 *     </Pagination>
 *   );
 * }
 *} 
 */
const Pagination = (props) => {
  const {
    className,
    cssModule,
    size,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'pagination',
    {
      [`pagination-${size}`]: !!size,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
