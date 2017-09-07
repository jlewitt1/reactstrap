import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

/**
 * @description Popover Content
 * @example 
 * 
 * import React from 'react';
 * import { Button, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
 *
 * class PopoverItem extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     this.toggle = this.toggle.bind(this);
 *     this.state = {
 *       popoverOpen: false
 *     };
 *   }
 * 
 *   toggle() {
 *     this.setState({
 *       popoverOpen: !this.state.popoverOpen
 *     });
 *   }
 * 
 *   render() {
 *     return (
 *       <span>
 *         <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
 *           {this.props.item.text}
 *         </Button>
 *         <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
 *           <PopoverTitle>Popover Title</PopoverTitle>
 *           <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
 *         </Popover>
 *       </span>
 *     );
 *   }
 * }
 * 
 * class PopoverExampleMulti extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       popovers: [
 *         {
 *           placement: 'top',
 *           text: 'Top'
 *         },
 *         {
 *           placement: 'bottom',
 *           text: 'Bottom'
 *         },
 *         {
 *           placement: 'left',
 *           text: 'Left'
 *         },
 *         {
 *           placement: 'right',
 *           text: 'Right'
 *         }
 *       ]
 *     };
 *   }
 * 
 *   render() {
 *     return (
 *       <div>
 *         { this.state.popovers.map((popover, i) => {
 *           return <PopoverItem key={i} item={popover} id={i} />;
 *         })}
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default PopoverExampleMulti; 
 */

const PopoverContent = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-content'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverContent.propTypes = propTypes;
PopoverContent.defaultProps = defaultProps;

export default PopoverContent;
