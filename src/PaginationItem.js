import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'li',
};

/**
 * @description Pagination Item
 * @example 
 * import React from 'react';
 * import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   render() {
 *     return (
 *       <Pagination>
 *         <PaginationItem disabled>
 *           <PaginationLink previous href="#" />
 *         </PaginationItem>
 *         <PaginationItem active>
 *           <PaginationLink href="#">
 *             1
 *           </PaginationLink>
 *         </PaginationItem>
 *         <PaginationItem>
 *           <PaginationLink href="#">
 *             2
 *           </PaginationLink>
 *         </PaginationItem>
 *         <PaginationItem>
 *           <PaginationLink href="#">
 *             3
 *           </PaginationLink>
 *         </PaginationItem>
 *         <PaginationItem>
 *           <PaginationLink href="#">
 *             4
 *           </PaginationLink>
 *         </PaginationItem>
 *         <PaginationItem>
 *           <PaginationLink href="#">
 *             5
 *           </PaginationLink>
 *         </PaginationItem>
 *         <PaginationItem>
 *           <PaginationLink next href="#" />
 *         </PaginationItem>
 *       </Pagination>
 *     );
 *   }
 * }
 */

const PaginationItem = (props) => {
  const {
    active,
    className,
    cssModule,
    disabled,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'page-item',
    {
      active,
      disabled,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
