import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const childContextTypes = {
  activeTabId: PropTypes.any
};

/**
 * @description Tab Content
 * @example import React from 'react';
 * import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
 * import classnames from 'classnames';
 *
 * export default class Example extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     this.toggle = this.toggle.bind(this);
 *     this.state = {
 *       activeTab: '1'
 *     };
 *   }
 * 
 *   toggle(tab) {
 *     if (this.state.activeTab !== tab) {
 *       this.setState({
 *         activeTab: tab
 *       });
 *     }
 *   }
 *   render() {
 *     return (
 *       <div>
 *         <Nav tabs>
 *           <NavItem>
 *             <NavLink
 *               className={classnames({ active: this.state.activeTab === '1' })}
 *               onClick={() => { this.toggle('1'); }}
 *             >
 *               Tab1
 *             </NavLink>
 *           </NavItem>
 *           <NavItem>
 *             <NavLink
 *               className={classnames({ active: this.state.activeTab === '2' })}
 *               onClick={() => { this.toggle('2'); }}
 *             >
 *               Moar Tabs
 *             </NavLink>
 *           </NavItem>
 *         </Nav>
 *         <TabContent activeTab={this.state.activeTab}>
 *           <TabPane tabId="1">
 *             <Row>
 *               <Col sm="12">
 *                 <h4>Tab 1 Contents</h4>
 *               </Col>
 *             </Row>
 *           </TabPane>
 *           <TabPane tabId="2">
 *             <Row>
 *               <Col sm="6">
 *                 <Card block>
 *                   <CardTitle>Special Title Treatment</CardTitle>
 *                   <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
 *                   <Button>Go somewhere</Button>
 *                 </Card>
 *               </Col>
 *               <Col sm="6">
 *                 <Card block>
 *                   <CardTitle>Special Title Treatment</CardTitle>
 *                   <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
 *                   <Button>Go somewhere</Button>
 *                 </Card>
 *               </Col>
 *             </Row>
 *           </TabPane>
 *         </TabContent>
 *       </div>
 *     );
 *   }
 * }
 */

export default class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }
  getChildContext() {
    return {
      activeTabId: this.state.activeTab
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.activeTab !== nextProps.activeTab) {
      this.setState({
        activeTab: nextProps.activeTab
      });
    }
  }
  render() {
    const {
      className,
      cssModule,
      tag: Tag,
    } = this.props;

    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = mapToCssModules(classNames('tab-content', className), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}
TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
TabContent.childContextTypes = childContextTypes;
