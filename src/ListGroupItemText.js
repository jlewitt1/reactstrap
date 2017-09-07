import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'p'
};

/**
 * @description List Group Item Text
 * @example 
 * import React from 'react';
 * import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   render() {
 *     return (
 *       <ListGroup>
 *         <ListGroupItem active>
 *           <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
 *           <ListGroupItemText>
 *           Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
 *           </ListGroupItemText>
 *         </ListGroupItem>
 *         <ListGroupItem>
 *           <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
 *           <ListGroupItemText>
 *           Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
 *           </ListGroupItemText>
 *         </ListGroupItem>
 *         <ListGroupItem>
 *           <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
 *           <ListGroupItemText>
 *           Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
 *           </ListGroupItemText>
 *         </ListGroupItem>
 *       </ListGroup>
 *     );
 *   }
 * } 
 */

const ListGroupItemText = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'list-group-item-text'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemText.propTypes = propTypes;
ListGroupItemText.defaultProps = defaultProps;

export default ListGroupItemText;
