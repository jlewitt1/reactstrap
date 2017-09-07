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
  tag: 'h3'
};

/**
 * @description Popover Title
 * @example 
 * import React from 'react';
 * import { Button, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
 *
 * export default class Example extends React.Component {
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
 *       <div>
 *         <Button id="Popover1" onClick={this.toggle}>
 *           Launch Popover
 *         </Button>
 *         <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
 *           <PopoverTitle>Popover Title</PopoverTitle>
 *           <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>
 *         </Popover>
 *       </div>
 *     );
 *   }
 * } 
 */

const PopoverTitle = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-title'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverTitle.propTypes = propTypes;
PopoverTitle.defaultProps = defaultProps;

export default PopoverTitle;
