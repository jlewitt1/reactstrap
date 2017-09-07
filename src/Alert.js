import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import { mapToCssModules } from './utils';

const FirstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
);

const propTypes = {
  children: PropTypes.node,
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.string} color - default: 'success;
   */
  color: PropTypes.string,
  /**
   * @property {PropTypes.bool} isOpen - default: 'true'
   */
  isOpen: PropTypes.bool,
  /**
   * @property {PropTypes.func} toggle
   */
  toggle: PropTypes.func,
  /**
   * @property {PropTypes.func|PropTypes.string} tag
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @property {PropTypes.number} transitionAppearTimeout - Set to 0 to disable animation
   */
  transitionAppearTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} transitionEnterTimeout - Set to 0 to disable animation
   */
  transitionEnterTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} transitionLeaveTimeout - Set to 0 to disable animation
   */
  transitionLeaveTimeout: PropTypes.number,
};

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  transitionAppearTimeout: 150,
  transitionEnterTimeout: 150,
  transitionLeaveTimeout: 150,
  closeAriaLabel: 'Close'
};

/**
 * @description Alert Message
 * @example 
 * 
 * import React from 'react';
 * import { Alert } from 'reactstrap';
 *
 * const Example = (props) => {
 *  return (
 *    <div>
 *      <Alert color="success">
 *        <strong>Well done!</strong> You successfully read this important alert message.
 *     </Alert>
 *      <Alert color="info">
 *        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
 *      </Alert>
 *      <Alert color="warning">
 *        <strong>Warning!</strong> Better check yourself, you're not looking too good.
 *      </Alert>
 *     <Alert color="danger">
 *        <strong>Oh snap!</strong> Change a few things up and try submitting again.
 *      </Alert>
 *    </div>
 *  );
 * };
 *
 * export default Example;
 */

 const Alert = (props) => {
   const {
     className,
     closeClassName,
     closeAriaLabel,
     cssModule,
     tag: Tag,
     color,
     isOpen,
     toggle,
     children,
    transitionAppearTimeout,
    transitionEnterTimeout,
    transitionLeaveTimeout,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': toggle }
  ), cssModule);

  const closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);

  const alert = (
    <Tag {...attributes} className={classes} role="alert">
      { toggle ?
        <button type="button" className={closeClasses} aria-label={closeAriaLabel} onClick={toggle}>
          <span aria-hidden="true">&times;</span>
        </button>
        : null }
      { children }
    </Tag>
  );

  return (
    <CSSTransitionGroup
      component={FirstChild}
      transitionName={{
        appear: 'fade',
        appearActive: 'show',
        enter: 'fade',
        enterActive: 'show',
        leave: 'fade',
        leaveActive: 'out'
      }}
      transitionAppear={transitionAppearTimeout > 0}
      transitionAppearTimeout={transitionAppearTimeout}
      transitionEnter={transitionEnterTimeout > 0}
      transitionEnterTimeout={transitionEnterTimeout}
      transitionLeave={transitionLeaveTimeout > 0}
      transitionLeaveTimeout={transitionLeaveTimeout}
    >
      {isOpen ? alert : null}
    </CSSTransitionGroup>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
