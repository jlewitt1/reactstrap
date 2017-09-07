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
   * @property {PropTypes.bool} top
   */
  top: PropTypes.bool,
  /**
   * @property {PropTypes.bool} bottom
   */
  bottom: PropTypes.bool,
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'img'
};

/**
 * @description Card Image
 * @example 
 * import React from 'react';
 * import { Card, CardBlock, Button, CardTitle, CardText, CardImg } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <div>
 *       <Card>
 *         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
 *         <CardBlock>
 *           <CardTitle>Card Title</CardTitle>
 *           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
 *           <CardText>
 *             <small className="text-muted">Last updated 3 mins ago</small>
 *           </CardText>
 *         </CardBlock>
 *       </Card>
 *       <Card>
 *         <CardBlock>
 *           <CardTitle>Card Title</CardTitle>
 *           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
 *           <CardText>
 *             <small className="text-muted">Last updated 3 mins ago</small>
 *           </CardText>
 *         </CardBlock>
 *         <CardImg bottom width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
 *       </Card>
 *     </div>
 *   );
 * };
 * 
 * export default Example;
 * 
 */

const CardImg = (props) => {
  const {
    className,
    cssModule,
    top,
    bottom,
    tag: Tag,
    ...attributes
  } = props;

  let cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  const classes = mapToCssModules(classNames(
    className,
    cardImgClassName
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;

export default CardImg;
