import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  /**
   * @property {PropTypes.func|PropTypes.string} tag - Pass in a Component to override default element
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.bool} fluid
   */
  fluid: PropTypes.bool,
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
 * @description Jumbotron
 * @example 
 * import React from 'react';
 * import { Jumbotron, Button } from 'reactstrap';
 *
 * const Example = (props) => {
 * return (
 *   <div>
 *      <Jumbotron>
 *       <h1 className="display-3">Hello, world!</h1>
 *       <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
 *       <hr className="my-2" />
 *       <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
 *       <p className="lead">
 *         <Button color="primary">Learn More</Button>
 *       </p>
 *     </Jumbotron>
 *   </div>
 * );
 *};
 *
 * export default Example;
 */
const Jumbotron = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    fluid,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
