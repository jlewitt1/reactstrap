import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.string} size
   */
  size: PropTypes.string,
  /**
   * @property {PropTypes.bool} bordered
   */
  bordered: PropTypes.bool,
  /**
   * @property {PropTypes.bool} striped
   */
  striped: PropTypes.bool,
  /**
   * @property {PropTypes.bool} inverse
   */
  inverse: PropTypes.bool,
  /**
   * @property {PropTypes.bool} hover
   */
  hover: PropTypes.bool,
  /**
   * @property {PropTypes.bool} reflow
   */
  reflow: PropTypes.bool,
  /**
   * @property {PropTypes.bool} responsive
   */
  responsive: PropTypes.bool,
  /**
   * @property {PropTypes.func|PropTypes.string} tag -  Pass in a Component to override default element
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'table',
  responsiveTag: 'div',
};

/**
 * @description Table
 * @example
 * import React from 'react';
 * import { Table } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *  render() {
 *    return (
 *      <Table>
 *        <thead>
 *          <tr>
 *            <th>#</th>
 *            <th>First Name</th>
 *            <th>Last Name</th>
 *            <th>Username</th>
 *          </tr>
 *        </thead>
 *        <tbody>
 *          <tr>
 *            <th scope="row">1</th>
 *            <td>Mark</td>
 *            <td>Otto</td> 
 *            <td>@mdo</td>
 *          </tr>
 *          <tr>
 *            <th scope="row">2</th>
 *            <td>Jacob</td>
 *            <td>Thornton</td>
 *            <td>@fat</td>
 *          </tr>
 *          <tr>
 *            <th scope="row">3</th>
 *            <td>Larry</td>
 *            <td>the Bird</td>
 *            <td>@twitter</td>
 *          </tr>
 *        </tbody>
 *      </Table>
 *    );
 *  }
 *}
 *  
 */
const Table = (props) => {
  const {
    className,
    cssModule,
    size,
    bordered,
    striped,
    inverse,
    hover,
    reflow,
    responsive,
    tag: Tag,
    responsiveTag: ResponsiveTag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    striped ? 'table-striped' : false,
    inverse ? 'table-inverse' : false,
    hover ? 'table-hover' : false,
    reflow ? 'table-reflow' : false
  ), cssModule);

  const table = <Tag {...attributes} className={classes} />;

  if (responsive) {
    return (
      <ResponsiveTag className="table-responsive">{table}</ResponsiveTag>
    );
  }

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
