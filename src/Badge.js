import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span'
};


/**
 * @description Badge 
 * @example 
 * import React from 'react';
 * import { Badge } from 'reactstrap';
 * 
 * export default class Example extends React.Component {
 *  render() {
 *    return (
 *      <div>
 *        <Badge>default</Badge>
 *        <Badge color="primary">primary</Badge>
 *        <Badge color="success">success</Badge>
 *        <Badge color="info">info</Badge>
 *        <Badge color="warning">warning</Badge>
 *        <Badge color="danger">danger</Badge>
 *      </div>
 *    );
 *  }
 * }
 */

const Badge = (props) => {
  const {
    className,
    cssModule,
    color,
    pill,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    'badge-' + color,
    pill ? 'badge-pill' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
