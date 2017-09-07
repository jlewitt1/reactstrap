import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TetherContent from './TetherContent';
import { getTetherAttachments, mapToCssModules, omit, tetherAttachements } from './utils';

const propTypes = {
  /**
   * @property {top|bottom|left|right|top-left|top-center|top-right|right-top|right-middle|right-bottom|bottom-right|bottom-center|bottom-left|left-top|left-middle|left-bottom} placement - convenience attachments for popover. Examples http://github.hubspot.com/tooltip/docs/welcome/
   */
  placement: PropTypes.oneOf(tetherAttachements),
  /**
   * @property {PropTypes.string} target - target div ID, popover is attached to this element
   */
  target: PropTypes.string.isRequired,
  /**
   * @property {PropTypes.bool} isOpen - boolean to control the state of the popover
   */
  isOpen: PropTypes.bool,
  /**
   * @property {PropTypes.object} tether - optionally overide tether config http://tether.io/#options
   */
  tether: PropTypes.object,
  /**
   * @property {PropTypes.func} tetherRef -function which is passed a reference to the instance of tether for manually `position()`ing
   */
  tetherRef: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.func} toggle - callback for toggling isOpen in the controlling component
   */
  toggle: PropTypes.func,
};

const defaultProps = {
  isOpen: false,
  placement: 'bottom',
  toggle: () => {}
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show',
  },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' }
  ]
};

/**
 * @description Popover
 * @example 
 * import React from 'react';
 * import { Button, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 * constructor(props) {
 *   super(props);
 *
 *    this.toggle = this.toggle.bind(this);
 *    this.state = {
 *     popoverOpen: false
 *   };
 * }
 *
 * toggle() {
 *    this.setState({
 *      popoverOpen: !this.state.popoverOpen
 *   });
 * }
 *
 * render() {
 *   return (
 *      <div>
 *        <Button id="Popover1" onClick={this.toggle}>
 *         Launch Popover
 *       </Button>
 *      <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
 *         <PopoverTitle>Popover Title</PopoverTitle>
 *       <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
 *       </Popover>
 *     </div>
 *   );
 * }
 *}
 */

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.getTetherConfig = this.getTetherConfig.bind(this);
  }

  getTetherConfig() {
    const attachments = getTetherAttachments(this.props.placement);
    return {
      ...defaultTetherConfig,
      ...attachments,
      target: '#' + this.props.target,
      ...this.props.tether
    };
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    let tetherConfig = this.getTetherConfig();

    const classes = mapToCssModules(classNames(
      'popover-inner',
      this.props.className
    ), this.props.cssModule);

    const attributes = omit(this.props, Object.keys(propTypes));

    return (
      <TetherContent
        className={mapToCssModules('popover', this.props.cssModule)}
        tether={tetherConfig}
        tetherRef={this.props.tetherRef}
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
      >
        <div {...attributes} className={classes} />
      </TetherContent>
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
