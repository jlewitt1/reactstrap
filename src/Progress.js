import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import toNumber from 'lodash.tonumber';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  /**
   * @property {PropTypes.bool} bar - used in combination with multi
   */
  bar: PropTypes.bool,
  /**
   * @property {PropTypes.bool} multi
   */
  multi: PropTypes.bool,
  /**
   * @property {PropTypes.string} tag 
   */
  tag: PropTypes.string,
  /**
   * @property {PropTypes.string|PropTypes.number} value
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * @property {PropTypes.string|PropTypes.number} max
   */
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * @property {PropTypes.bool} animated 
   */
  animated: PropTypes.bool,
  /**
   * @property {PropTypes.bool} striped
   */
  striped: PropTypes.bool,
  /**
   * @property {PropTypes.string} color
   */
  color: PropTypes.string,
  /**
   * @property {PropTypes.string} className 
   */
  className: PropTypes.string,
  /**
   * @property {PropTypes.bool} barClassName - used to add class to the inner progress-bar element
   */
  barClassName: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
  value: 0,
  max: 100,
};

/**
 * @description Progress
 * @example 
 * import React from 'react';
 * import { Progress } from 'reactstrap';
 *
 * const Example = (props) => {
 * return (
 *    <div>
 *      <div className="text-center">0%</div>
 *     <Progress />
 *      <div className="text-center">25%</div>
 *     <Progress value="25" />
 *      <div className="text-center">50%</div>
 *     <Progress value={50} />
 *      <div className="text-center">75%</div>
 *     <Progress value={75} />
 *      <div className="text-center">100%</div>
 *     <Progress value="100" />
 *      <div className="text-center">Multiple bars</div>
 *      <Progress multi>
 *       <Progress bar value="15" />
 *       <Progress bar color="success" value="30" />
 *        <Progress bar color="info" value="25" />
 *        <Progress bar color="warning" value="20" />
 *       <Progress bar color="danger" value="5" />
 *     </Progress>
 *    </div>
 *  );
 * };
 *
 * export default Example;
 *
 */

const Progress = (props) => {
  const {
    children,
    className,
    barClassName,
    cssModule,
    value,
    max,
    animated,
    striped,
    color,
    bar,
    multi,
    tag: Tag,
    ...attributes
  } = props;

  const percent = ((toNumber(value) / toNumber(max)) * 100);

  const progressClasses = mapToCssModules(classNames(
    className,
    'progress'
  ), cssModule);

  const progressBarClasses = mapToCssModules(classNames(
    'progress-bar',
    bar ? className || barClassName : barClassName,
    animated ? 'progress-bar-animated' : null,
    color ? `bg-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null
  ), cssModule);

  const ProgressBar = multi ? children : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
      children={children}
    />
  );

  if (bar) {
    return ProgressBar;
  }

  return (
    <Tag {...attributes} className={progressClasses} children={ProgressBar} />
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
