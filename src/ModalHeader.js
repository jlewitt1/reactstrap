import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
};

const defaultProps = {
  tag: 'h4',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
};

/**
 * @description Modal Header
 * @example 
 * import React from 'react';
 * import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 *
 * class ModalExample extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       modal: false
 *     };
 * 
 *     this.toggle = this.toggle.bind(this);
 *   }
 * 
 *   toggle() {
 *     this.setState({
 *       modal: !this.state.modal
 *     });
 *   }
 * 
 *   render() {
 *     return (
 *       <div>
 *         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
 *         <Modal isOpen={this.state.modal} modalTransitionTimeout={20} backdropTransitionTimeout={10} toggle={this.toggle} className={this.props.className}>
 *           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
 *           <ModalBody>
 *             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *           </ModalBody>
 *           <ModalFooter>
 *             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
 *             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
 *           </ModalFooter>
 *         </Modal>
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default ModalExample;
 */

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    closeAriaLabel,
    ...attributes } = props;

  const classes = mapToCssModules(classNames(
    className,
    'modal-header'
  ), cssModule);

  if (toggle) {
    closeButton = (
      <button type="button" onClick={toggle} className="close" aria-label={closeAriaLabel}>
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {closeButton}
    </WrapTag>
  );
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
