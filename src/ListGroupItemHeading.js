import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};

const defaultProps = {
  tag: 'h5'
};

/**
 * @description List Group Item Heading
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

const ListGroupItemHeading = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'list-group-item-heading'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemHeading.propTypes = propTypes;
ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading;
