import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {
  Table, Tabs, Tab
} from 'react-bootstrap'

class myJobs extends React.Component {

  render() {
    return (
      <div className="main-container">
        <Navbar current_client = 'Alex' />
        <h2>My Jobs</h2>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Upcoming Jobs">
            Enter table here
          </Tab>
          <Tab eventKey={2} title="Current Jobs">
            Enter table here
          </Tab>
          <Tab eventKey={3} title="Completed jobs">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Address</th>
                  <th>Job Date</th>
                  <th>Job Type</th>
                  <th>Job Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>208393</td>
                  <td>22 Spadina Ave</td>
                  <td>April 3, 2017</td>
                  <td>SDS</td>
                  <td>Upcoming</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default (myJobs);
