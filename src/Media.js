import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.bool} body
   */
  body: PropTypes.bool,
  /**
   * @property {PropTypes.bool} bottom
   */
  bottom: PropTypes.bool,
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
   * @property {PropTypes.bool} heading 
   */
  heading: PropTypes.bool,
  /**
   * @property {PropTypes.bool} left
   */
  left: PropTypes.bool,
  /**
   * @property {PropTypes.bool} list
   */
  list: PropTypes.bool,
  /**
   * @property {PropTypes.bool} middle
   */
  middle: PropTypes.bool,
  /**
   * @property {PropTypes.bool} object 
   */
  object: PropTypes.bool,
  /**
   * @property {PropTypes.bool} right 
   */
  right: PropTypes.bool,
  /**
   * @property {PropTypes.func|PropTypes.string} tag
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.bool} top  
   */
  top: PropTypes.bool,
};

/**
 * @description Media
 * @example
 * 
 * import React from 'react';
 * import { Media } from 'reactstrap';
 *
 * const Example = () => {
 * return (
 *   <Media>
 *     <Media left href="#">
 *       <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
 *     </Media>
 *     <Media body>
 *       <Media heading>
 *         Media heading
 *       </Media>
 *       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
 *     </Media>
 *   </Media>
 * );
 *};
 *
 * export default Example;
 */
const Media = (props) => {
  const {
    body,
    bottom,
    className,
    cssModule,
    heading,
    left,
    list,
    middle,
    object,
    right,
    tag,
    top,
    ...attributes
  } = props;

  let defaultTag;
  if (heading) {
    defaultTag = 'h4';
  } else if (left || right) {
    defaultTag = 'a';
  } else if (object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }
  const Tag = tag || defaultTag;

  const classes = mapToCssModules(classNames(
    className,
    {
      'media-body': body,
      'media-heading': heading,
      'media-left': left,
      'media-right': right,
      'media-top': top,
      'media-bottom': bottom,
      'media-middle': middle,
      'media-object': object,
      'media-list': list,
      media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Media.propTypes = propTypes;

export default Media;
