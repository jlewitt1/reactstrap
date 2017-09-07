import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag - pass in a component to override default element
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'a'
};

/**
 * @description Card Link
 * @example 
 * import React from 'react';
 * import { Card, CardImg, CardText, CardBlock, CardLink,
 * CardTitle, CardSubtitle } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <div>
 *       <Card>
 *         <CardBlock>
 *           <CardTitle>Card title</CardTitle>
 *           <CardSubtitle>Card subtitle</CardSubtitle>
 *         </CardBlock>
 *         <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
 *         <CardBlock>
 *           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
 *           <CardLink href="#">Card Link</CardLink>
 *           <CardLink href="#">Another Link</CardLink>
 *         </CardBlock>
 *       </Card>
 *     </div>
 *   );
 * };
 * 
 * export default Example; 
 */

const CardLink = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    getRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-link'
  ), cssModule);

  return (
    <Tag {...attributes} ref={getRef} className={classes} />
  );
};

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;

export default CardLink;
