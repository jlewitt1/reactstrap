import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const SHOW = 'SHOW';
const SHOWN = 'SHOWN';
const HIDE = 'HIDE';
const HIDDEN = 'HIDDEN';

const propTypes = {
  /**
   * @property {PropTypes.bool} isOpen
   */
  isOpen: PropTypes.bool,
  /**
   * @property {PropTypes.string} className
   */
  className: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.bool} navbar
   */
  navbar: PropTypes.bool,
  /**
   * @property {shape|number|PropTypes.object} delay - optionally override show/hide delays - default { show: 350, hide: 350 }
   */
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number,
  ]),
  /**
   * @property {PropTypes.func} onOpened
   */
  onOpened: PropTypes.func,
  /**
   * @property {PropTypes.func} onClosed
   */
  onClosed: PropTypes.func,
};

const DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

const defaultProps = {
  isOpen: false,
  tag: 'div',
  delay: DEFAULT_DELAYS,
  onOpened: () => {},
  onClosed: () => {},
};
/**
 * @description Collapse
 * @example 
 * import React, { Component } from 'react';
 * import { Collapse, Button, CardBlock, Card } from 'reactstrap';
 *
 * class Example extends Component {
 *  constructor(props) {
 *   super(props);
 *     this.toggle = this.toggle.bind(this);
 *     this.state = { collapse: false };
 *  }
 *
 *  toggle() {
 *     this.setState({ collapse: !this.state.collapse });
 *  }
 *
 *   render() {
 *    return (
 *       <div>
 *         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
 *         <Collapse isOpen={this.state.collapse}>
 *          <Card>
 *            <CardBlock>
 *            Anim pariatur cliche reprehenderit,
 *             enim eiusmod high life accusamus terry richardson ad squid. Nihil
 *             anim keffiyeh helvetica, craft beer labore wes anderson cred
 *             nesciunt sapiente ea proident.
 *           </CardBlock>
 *         </Card>
 *        </Collapse>
 *     </div>
 *   );
 *  }
 * }
 *
 * export default Example;
 */
class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: props.isOpen ? SHOWN : HIDDEN,
      height: null
    };
    this.element = null;
  }

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if (willOpen && collapse === HIDDEN) {
      // will open
      this.setState({ collapse: SHOW }, () => {
        // the height transition will work after class "collapsing" applied
        this.setState({ height: this.getHeight() });
        this.transitionTag = setTimeout(() => {
          this.setState({
            collapse: SHOWN,
            height: null
          });
        }, this.getDelay('show'));
      });
    } else if (!willOpen && collapse === SHOWN) {
      // will hide
      this.setState({ height: this.getHeight() }, () => {
        this.setState({
          collapse: HIDE,
          height: this.getHeight()
        }, () => {
          this.setState({ height: 0 });
        });
      });

      this.transitionTag = setTimeout(() => {
        this.setState({
          collapse: HIDDEN,
          height: null
        });
      }, this.getDelay('hide'));
    }
    // else: do nothing.
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.collapse === SHOWN &&
        prevState &&
        prevState.collapse !== SHOWN) {
      this.props.onOpened();
    }

    if (this.state.collapse === HIDDEN &&
        prevState &&
        prevState.collapse !== HIDDEN) {
      this.props.onClosed();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTag);
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  getHeight() {
    return this.element.scrollHeight;
  }

  render() {
    const {
      navbar,
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed']);
    const { collapse, height } = this.state;
    let collapseClass;
    switch (collapse) {
      case SHOW:
        collapseClass = 'collapsing';
        break;
      case SHOWN:
        collapseClass = 'collapse show';
        break;
      case HIDE:
        collapseClass = 'collapsing';
        break;
      case HIDDEN:
        collapseClass = 'collapse';
        break;
      default:
      // HIDDEN
        collapseClass = 'collapse';
    }

    const classes = mapToCssModules(classNames(
      className,
      collapseClass,
      navbar && 'navbar-collapse'
    ), cssModule);
    const style = height === null ? null : { height };
    return (
      <Tag
        {...attributes}
        style={{ ...attributes.style, ...style }}
        className={classes}
        ref={(c) => { this.element = c; }}
      />
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
export default Collapse;
