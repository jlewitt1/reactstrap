import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ul'
};
/**
 * @description List Group
 * @example
 * 
 * import React from 'react';
 * import { ListGroup, ListGroupItem } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 * render() {
 *   return (
 *     <ListGroup>
 *       <ListGroupItem>Cras justo odio</ListGroupItem>
 *       <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
 *       <ListGroupItem>Morbi leo risus</ListGroupItem>
 *       <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
 *       <ListGroupItem>Vestibulum at eros</ListGroupItem>
 *     </ListGroup>
 *   );
 * }
 *}
 */
const ListGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    flush,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group',
    flush ? 'list-group-flush' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;
