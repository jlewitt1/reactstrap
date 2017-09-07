import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag - pass in a component to override default element
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

/**
 * @description Card Image Overlay
 * @example 
 * import React from 'react';
 * import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <div>
 *       <Card inverse>
 *         <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
 *         <CardImgOverlay>
 *           <CardTitle>Card Title</CardTitle>
 *           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
 *           <CardText>
 *             <small className="text-muted">Last updated 3 mins ago</small>
 *           </CardText>
 *         </CardImgOverlay>
 *       </Card>
 *     </div>
 *   );
 * };
 * 
 * export default Example;
 */

const CardImgOverlay = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-img-overlay'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardImgOverlay.propTypes = propTypes;
CardImgOverlay.defaultProps = defaultProps;

export default CardImgOverlay;
