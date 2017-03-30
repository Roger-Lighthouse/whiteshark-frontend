import React from 'react'
import FilterLink from '../containers/FilterLink'
import {
  Tabs, Tab
} from 'react-bootstrap'

const Footer = React.createClass({


  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    this.setState({key});
  },

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Tab 1">
          Tab 1 content {" "}
          <FilterLink filter="SHOW_ALL">
            All Jobs
          </FilterLink>
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          Tab 2 content {", "}
          <FilterLink filter="SHOW_ACTIVE">
            Upcoming Jobs
          </FilterLink>
        </Tab>
        <Tab eventKey={3} title="Tab 3">
          Tab 3 content {", "}
          <FilterLink filter="SHOW_COMPLETED">
            Completed Jobs
          </FilterLink>
        </Tab>
      </Tabs>
    );
  }
});


export default Footer
