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
   * @property {PropTypes.bool} inverse
   */
  inverse: PropTypes.bool,
  /**
   * @property {PropTypes.string} color
   */
  color: PropTypes.string,
  /**
   * @property {PropTypes.bool} block
   */
  block: PropTypes.bool,
  outline: PropTypes.bool,
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
 * @description Card
 * @example
 * import React from 'react';
 * import { Card, CardImg, CardText, CardBlock,
 *  CardTitle, CardSubtitle, Button } from 'reactstrap';
 *
 * const Example = (props) => {
 *    return (
 *       <div>
 *       <Card>
 *         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
 *        <CardBlock>
 *          <CardTitle>Card title</CardTitle>
 *          <CardSubtitle>Card subtitle</CardSubtitle>
 *           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
 *            <Button>Button</Button>
 *        </CardBlock>
 *      </Card>
 *    </div>
 *    );
 * };    
 *
 * export default Example;
 * 
 */
const Card = (props) => {
  const {
    className,
    cssModule,
    color,
    block,
    inverse,
    outline,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card',
    inverse ? 'card-inverse' : false,
    block ? 'card-block' : false,
    color ? `card${outline ? '-outline' : ''}-${color}` : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
