import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  action: PropTypes.bool,
  className: PropTypes.any,
};

const defaultProps = {
  tag: 'li'
};

const handleDisabledOnClick = (e) => {
  e.preventDefault();
};

/**
 * @description List Group Item
 * @example 
 * import React from 'react';
 * import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   render() {
 *     return (
 *       <ListGroup>
 *         <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
 *         <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
 *         <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
 *       </ListGroup>
 *     );
 *   }
 * }
 *  */

const ListGroupItem = (props) => {
  const {
    className,
    tag: Tag,
    active,
    disabled,
    action,
    color,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    active ? 'active' : false,
    disabled ? 'disabled' : false,
    action ? 'list-group-item-action' : false,
    color ? `list-group-item-${color}` : false,
    'list-group-item'
  );

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;
