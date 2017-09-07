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
 * @description Card Columns
 * @example 
 * import React from 'react';
 * import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 * CardSubtitle, CardBlock } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <CardColumns>
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
 *       </Card>
 *       <Card>
 *         <CardBlock>
 *           <CardTitle>Card title</CardTitle>
 *           <CardSubtitle>Card subtitle</CardSubtitle>
 *           <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
 *           <Button>Button</Button>
 *         </CardBlock>
 *       </Card>
 *       <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
 *         <CardTitle>Special Title Treatment</CardTitle>
 *         <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
 *         <Button>Button</Button>
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
 *       <Card block inverse color="primary">
 *         <CardTitle>Special Title Treatment</CardTitle>
 *         <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
 *         <Button color="secondary">Button</Button>
 *       </Card>
 *     </CardColumns>
 *   );
 * };
 * 
 * export default Example;
 */

const CardColumns = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-columns'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardColumns.propTypes = propTypes;
CardColumns.defaultProps = defaultProps;

export default CardColumns;
