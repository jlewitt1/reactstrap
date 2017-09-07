import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

/**
 * @description Button Toolbar 
 * @example
 * import React from 'react';
 * import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   render() {
 *     return (
 *       <ButtonToolbar>
 *         <ButtonGroup>
 *           <Button>1</Button>
 *           <Button>2</Button>
 *           <Button>3</Button>
 *           <Button>4</Button>
 *         </ButtonGroup>
 *         <ButtonGroup>
 *           <Button>5</Button>
 *           <Button>6</Button>
 *           <Button>7</Button>
 *         </ButtonGroup>
 *         <ButtonGroup>
 *           <Button>8</Button>
 *         </ButtonGroup>
 *       </ButtonToolbar>
 *     );
 *   }
 * }
 */

const ButtonToolbar = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'btn-toolbar'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
