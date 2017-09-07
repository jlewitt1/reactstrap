import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TransitionGroup } from 'react-transition-group';
import { mapToCssModules } from './utils';

/**
 * @description Carousel
 * @example
 * import React, { Component } from 'react';
 * import {
 *   Carousel,
 *   CarouselItem,
 *   CarouselControl,
 *   CarouselIndicators,
 *   CarouselCaption
 * } from 'reactstrap';
 * 
 * const items = [
 *  {
 *     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
 *     altText: 'Slide 1',
 *     caption: 'Slide 1'
 *  },
 * {
 *    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
 *    altText: 'Slide 2',
 *    caption: 'Slide 2'
 *  },
 *  {
 *   src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
 *   altText: 'Slide 3',
 *   caption: 'Slide 3'
 *  }
 * ];
 *
 * class Example extends Component {
 *  constructor(props) {
 *    super(props);
 *    this.state = { activeIndex: 0, paused: false };
 *    this.next = this.next.bind(this);
 *    this.previous = this.previous.bind(this);
 *    this.goToIndex = this.goToIndex.bind(this);
 *    this.pause = this.pause.bind(this);
 *    this.cycle = this.cycle.bind(this);
*   }
*  next() {
*    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
*    this.setState({ activeIndex: nextIndex });
*  }
*
*  previous() {
*    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
*    this.setState({ activeIndex: nextIndex });
*  }
*
*  goToIndex(newIndex) {
*    this.setState({ activeIndex: newIndex });
*  }
*
*  pause() {
*    this.setState({ paused: true });
*  }
*
*  cycle() {
*    this.setState({ paused: false });
*  }
*
*  render() {
*    const { activeIndex } = this.state;
*
*    const slides = items.map((item, idx) => {
*      return (
*        <CarouselItem
*          key={idx}
*          src={item.src}
*          altText={item.altText}
*        >
*          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
*        </CarouselItem>
*      );
*    });
*
*    return (
*      <Carousel
*        activeIndex={this.state.activeIndex}
*        next={this.next}
*        previous={this.previous}
*        paused={this.state.paused}
*        hoverStart={this.pause}
*        hoverEnd={this.cycle}
*      >
*        <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
*        {slides}
*        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
*        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
*      </Carousel>
*    );
*  }
* }
*
* export default Example;
*/
class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { direction: 'right' };
  }

  getChildContext() {
    return { direction: this.state.direction };
  }

  componentDidMount() {
    // Set up the cycle
    if (this.props.interval) {
      this.cycleInterval = setInterval(() => {
        if (!this.props.paused) {
          this.props.next();
        }
      }, parseInt(this.props.interval, 10));
    }

    if (this.props.keyboard) {
      document.addEventListener('keyup', this.handleKeyPress);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Calculate the direction to turn
    if (this.props.activeIndex + 1 === nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
      this.setState({ direction: 'left' });
    } else if (this.props.activeIndex > nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else {
      this.setState({ direction: 'left' });
    }
  }

  componentWillUnmount() {
    clearInterval(this.cycleInterval);
    document.removeEventListener('key', this.handleKeyPress);
  }

  handleKeyPress(evt) {
    if (this.props.keyboard && evt.keyCode === 37) {
      this.props.previous();
    } else if (this.props.keyboard && evt.keyCode === 39) {
      this.props.next();
    }
  }

  render() {
    const { children, cssModule, activeIndex, hoverStart, hoverEnd } = this.props;
    const outerClasses = mapToCssModules(classNames(
          'carousel',
          'slide'
      ), cssModule);

    const innerClasses = mapToCssModules(classNames(
          'carousel-inner'
      ), cssModule);


    const slidesOnly = children.every((child) => {
      return child.type && child.type.name === 'CarouselItem';
    });

    // Rendering only slides
    if (slidesOnly) {
      return (
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
          <TransitionGroup component="div" role="listbox" className={innerClasses}>
            {children[activeIndex]}
          </TransitionGroup>
        </div>
      );
    }

    // Rendering slides and controls
    if (children[0] instanceof Array) {
      const carouselItems = children[0];
      const controlLeft = children[1];
      const controlRight = children[2];

      return (
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
          <TransitionGroup component="div" role="listbox" className={innerClasses}>
            {carouselItems[activeIndex]}
          </TransitionGroup>
          {controlLeft}
          {controlRight}
        </div>
      );
    }

    // Rendering indicators, slides and controls
    const indicators = children[0];
    const carouselItems = children[1];
    const controlLeft = children[2];
    const controlRight = children[3];

    return (
      <div ref={(carousel) => { this.carousel = carousel; }} className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
        {indicators}
        <TransitionGroup component="div" role="listbox" className={innerClasses}>
          {carouselItems[activeIndex]}
        </TransitionGroup>
        {controlLeft}
        {controlRight}
      </div>
    );
  }

}

Carousel.propTypes = {
  paused: PropTypes.bool,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  /**
   * @property {PropTypes.bool} keyboard
   */
  keyboard: PropTypes.bool,
  /**
   * @property {PropTypes.object} cssModule
   */
  cssModule: PropTypes.object,
  /**
   * @property {PropTypes.number} activeIndex
   */
  activeIndex: PropTypes.number,
  /**
   * @property {PropTypes.number|PropTypes.bool} interval
   */
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool
  ]),
  children: PropTypes.array,
  hoverStart: PropTypes.func,
  hoverEnd: PropTypes.func
};

Carousel.defaultProps = {
  interval: 5000,
  hover: false,
  paused: false,
  keyboard: true
};

Carousel.childContextTypes = {
  direction: PropTypes.string
};

export default Carousel;
