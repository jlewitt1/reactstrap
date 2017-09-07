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
 * @description Card Header
 * @example
 * import React from 'react';
 * import { Card, Button, CardHeader, CardFooter, CardBlock,
 * CardTitle, CardText } from 'reactstrap';
 *
 * const Example = (props) => {
 *   return (
 *     <div>
 *       <Card>
 *         <CardHeader>Header</CardHeader>
 *         <CardBlock>
 *           <CardTitle>Special Title Treatment</CardTitle>
 *           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
 *           <Button>Go somewhere</Button>
 *         </CardBlock>
 *         <CardFooter>Footer</CardFooter>
 *       </Card>
 *
 *       <Card>
 *         <CardHeader tag="h3">Featured</CardHeader>
 *         <CardBlock>
 *           <CardTitle>Special Title Treatment</CardTitle>
 *           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
 *           <Button>Go somewhere</Button>
 *         </CardBlock>
 *         <CardFooter className="text-muted">Footer</CardFooter>
 *       </Card>
 *     </div>
 *   );
 * };
 *
 * export default Example;
 */

const CardHeader = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-header'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
