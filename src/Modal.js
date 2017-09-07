import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
  omit
} from './utils';

const propTypes = {
  /**
   * @property {PropTypes.bool} isOpen - boolean to control the state of the popover
   */
  isOpen: PropTypes.bool,
  /**
   * @property {PropTypes.bool} autoFocus 
   */
  autoFocus: PropTypes.bool,
  /**
   * @property {PropTypes.string} size 
   */
  size: PropTypes.string,
  /**
   * @property {PropTypes.func} toggle - callback for toggling isOpen in the controlling component
   */
  toggle: PropTypes.func,
  /**
   * @property {PropTypes.bool} keyboard 
   */
  keyboard: PropTypes.bool,
  /**
   * @property {PropTypes.string} role - defaults to "dialog"
   */
  role: PropTypes.string,
  /**
   * @property {PropTypes.string} labelledBy - used to reference the ID of the title element in the modal
   */
  labelledBy: PropTypes.string,
  /**
   * @property {PropTypes.bool|static} backdrop - control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
   */
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  /**
   * @property {PropTypes.func} onEnter - called on componentDidMount
   */
  onEnter: PropTypes.func,
  /**
   * @property {PropTypes.func} onExit - called on componentWillUnmount
   */
  onExit: PropTypes.func,
  /**
   * @property {PropTypes.func} onOpened
   */
  onOpened: PropTypes.func,
  /**
   * @property {PropTypes.func} onClosed
   */
  onClosed: PropTypes.func,
  children: PropTypes.node,
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.string,
  /**
   * @property {PropTypes.string} wrapClassName
   */
  wrapClassName: PropTypes.string,
  /**
   * @property {PropTypes.string} modalClassName
   */
  modalClassName: PropTypes.string,
  /**
   * @property {PropTypes.string} backdropClassName
   */
  backdropClassName: PropTypes.string,
  /**
   * @property {PropTypes.string} contentClassName
   */
  contentClassName: PropTypes.string,
  /**
   * @property {PropTypes.bool} fade - boolean to control whether the fade transition occurs (default: true)
   */
  fade: PropTypes.bool,
  /**
   * @property {PropTypes.object} cssModule
   */
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.number|PropTypes.string} zIndex - zIndex defaults to 1000.
   */
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * @property {PropTypes.number} backdropTransitionTimeout - controls appear, enter, and leave (default: 150)
   */
  backdropTransitionTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} backdropTransitionAppearTimeout - If you need different values for appear v. enter v. leave, use the more specific props like backdropTransitionAppearTimeout
   */
  backdropTransitionAppearTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} backdropTransitionEnterTimeout
   */
  backdropTransitionEnterTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} backdropTransitionLeaveTimeout
   */
  backdropTransitionLeaveTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} modalTransitionTimeout - controls appear, enter, and leave (default: 300)
   */
  modalTransitionTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} modalTransitionAppearTimeout - If you need different values for appear v. enter v. leave, use the more specific props like modalTransitionAppearTimeout
   */
  modalTransitionAppearTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} modalTransitionEnterTimeout
   */
  modalTransitionEnterTimeout: PropTypes.number,
  /**
   * @property {PropTypes.number} modalTransitionLeaveTimeout
   */
  modalTransitionLeaveTimeout: PropTypes.number,
};

const propsToOmit = Object.keys(propTypes);

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
};

/**
 * @description Modal
 * @example 
 * eslint react/no-multi-comp: 0, react/prop-types: 0 
 * import React from 'react';
 * import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 *
 * class ModalExample extends React.Component {
 * constructor(props) {
 *   super(props);
 *    this.state = {
 *     modal: false
 *    };
 *
 *    this.toggle = this.toggle.bind(this);
 * }  
 *
 * toggle() {
 *   this.setState({
 *     modal: !this.state.modal
 *   });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
 *       <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
 *         <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
 *         <ModalBody>
 *           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *         </ModalBody>
 *         <ModalFooter>
 *           <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
 *           <Button color="secondary" onClick={this.toggle}>Cancel</Button>
 *         </ModalFooter>
 *       </Modal>
 *     </div>
 *   );
 *  }
 * }
 *
 * export default ModalExample;
 */

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.originalBodyPadding = null;
    this.isBodyOverflowing = false;
    this.togglePortal = this.togglePortal.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.destroy = this.destroy.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.togglePortal();
    }
    if (this.props.onEnter) {
      this.props.onEnter();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      // handle portal events/dom updates
      this.togglePortal();
    } else if (this._element) {
      // rerender portal
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.destroy();
    if (this.props.onExit) {
      this.props.onExit();
    }
  }

  onOpened() {
    if (this.props.onOpened) {
      this.props.onOpened();
    }
  }

  onClosed() {
    this.destroy();
    if (this.props.onClosed) {
      this.props.onClosed();
    }
  }

  handleEscape(e) {
    if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
    if (this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  hasTransition() {
    if (this.props.fade === false) {
      return false;
    }

    return this.props.modalTransitionTimeout > 0;
  }

  togglePortal() {
    if (this.props.isOpen) {
      if (this.props.autoFocus) {
        this._focus = true;
      }
      this.show();
      if (!this.hasTransition()) {
        this.onOpened();
      }
    } else {
      this.hide();
      if (!this.hasTransition()) {
        this.onClosed();
      }
    }
  }

  destroy() {
    if (this._element) {
      ReactDOM.unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
    document.body.className = mapToCssModules(classNames(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    this.renderIntoSubtree();
  }

  show() {
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    document.body.className = mapToCssModules(classNames(
      classes,
      'modal-open'
    ), this.props.cssModule);

    this.renderIntoSubtree();
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);

    return (
      <div
        className={mapToCssModules(classNames('modal-dialog', this.props.className, {
          [`modal-${this.props.size}`]: this.props.size
        }), this.props.cssModule)}
        role="document"
        ref={(c) => (this._dialog = c)}
        {...attributes}
      >
        <div
          className={mapToCssModules(
            classNames('modal-content', this.props.contentClassName),
            this.props.cssModule
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  renderIntoSubtree() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    // check if modal should receive focus
    if (this._focus) {
      this._dialog.parentNode.focus();
      this._focus = false;
    }
  }

  renderChildren() {
    const {
      wrapClassName,
      modalClassName,
      backdropClassName,
      cssModule,
      isOpen,
      backdrop,
      modalTransitionTimeout,
      backdropTransitionTimeout,
      role,
      labelledBy
    } = this.props;

    const modalAttributes = {
      onClickCapture: this.handleBackdropClick,
      onKeyUp: this.handleEscape,
      style: { display: 'block' },
      'aria-labelledby': labelledBy,
      role,
      tabIndex: '-1'
    };

    if (this.hasTransition()) {
      return (
        <TransitionGroup component="div" className={mapToCssModules(wrapClassName)}>
          {isOpen && (
            <Fade
              key="modal-dialog"
              onEnter={this.onOpened}
              onLeave={this.onClosed}
              transitionAppearTimeout={
                typeof this.props.modalTransitionAppearTimeout === 'number'
                  ? this.props.modalTransitionAppearTimeout
                  : modalTransitionTimeout
              }
              transitionEnterTimeout={
                typeof this.props.modalTransitionEnterTimeout === 'number'
                  ? this.props.modalTransitionEnterTimeout
                  : modalTransitionTimeout
              }
              transitionLeaveTimeout={
                typeof this.props.modalTransitionLeaveTimeout === 'number'
                  ? this.props.modalTransitionLeaveTimeout
                  : modalTransitionTimeout
              }
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal', modalClassName), cssModule)}
              {...modalAttributes}
            >
              {this.renderModalDialog()}
            </Fade>
          )}
          {isOpen && backdrop && (
            <Fade
              key="modal-backdrop"
              transitionAppearTimeout={
                typeof this.props.backdropTransitionAppearTimeout === 'number'
                  ? this.props.backdropTransitionAppearTimeout
                  : backdropTransitionTimeout
              }
              transitionEnterTimeout={
                typeof this.props.backdropTransitionEnterTimeout === 'number'
                  ? this.props.backdropTransitionEnterTimeout
                  : backdropTransitionTimeout
              }
              transitionLeaveTimeout={
                typeof this.props.backdropTransitionLeaveTimeout === 'number'
                  ? this.props.backdropTransitionLeaveTimeout
                  : backdropTransitionTimeout
              }
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
            />
          )}
        </TransitionGroup>
      );
    }

    return (
      <div className={mapToCssModules(wrapClassName)}>
        {isOpen && (
          <div
            className={mapToCssModules(classNames('modal', 'show', modalClassName), cssModule)}
            {...modalAttributes}
          >
            {this.renderModalDialog()}
          </div>
        )}
        {isOpen && backdrop && (
          <div
            className={mapToCssModules(classNames('modal-backdrop', 'show', backdropClassName), cssModule)}
          />
        )}
      </div>
    );
  }

  render() {
    return null;
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
