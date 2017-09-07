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
  tag: 'div',
};

/**
 * @description Card Deck
 * @example 
 * import React from 'react';
 * import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 * CardSubtitle, CardBlock } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <CardDeck>
 *       <Card>
 *         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
 *         <CardBlock>
 *           <CardTitle>Card title</CardTitle>
 *           <CardSubtitle>Card subtitle</CardSubtitle>
 *           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
 *           <Button>Button</Button>
 *         </CardBlock>
 *       </Card>
 *       <Card>
 *         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
 *         <CardBlock>
 *           <CardTitle>Card title</CardTitle>
 *           <CardSubtitle>Card subtitle</CardSubtitle>
 *           <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
 *           <Button>Button</Button>
 *         </CardBlock>
 *       </Card>
 *       <Card>
 *         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
 *         <CardBlock>
 *           <CardTitle>Card title</CardTitle>
 *           <CardSubtitle>Card subtitle</CardSubtitle>
 *           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
 *           <Button>Button</Button>
 *         </CardBlock>
 *       </Card>
 *     </CardDeck>
 *   );
 * };
 * 
 * export default Example;
 */
const CardDeck = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-deck'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardDeck.propTypes = propTypes;
CardDeck.defaultProps = defaultProps;

export default CardDeck;
