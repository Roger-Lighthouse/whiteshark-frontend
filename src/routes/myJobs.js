import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { deleteJob } from '../actions/job'

import {
  Table, Tabs, Tab, Button, ButtonToolbar
} from 'react-bootstrap'

const DeleteJob = (jobId) => {
  this.props.dispatch(deleteJob(jobId))
}

const UpdateJob = (job) => {
  return console.log(job);
}

const testJob = {
  jobId: 123,
  jobType: 'SDS',
  jobPrice: null,
  jobDate: "April 3, 2017",
  address: "22 Spadina Ave"
}

class myJobs extends React.Component {

  render() {
    return (
      <div id="myJobsContainer">
        <Navbar current_client='Alex' />
        <h2>My Jobs</h2>
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Upcoming Jobs">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Job Type</th>
                  <th>Job Price</th>
                  <th>Job Date</th>
                  <th>Address</th>
                  <th>Modify Job</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{testJob.jobId}</td>
                  <td>{testJob.jobType}</td>
                  <td>{testJob.jobPrice}</td>
                  <td>{testJob.jobDate}</td>
                  <td>{testJob.address}</td>
                  <td>
                    <ButtonToolbar>
                      <Button bsStyle="danger" bsSize="xsmall"
                        onClick={() => DeleteJob(testJob.jobId)}>
                        Delete Job
                      </Button>
                      <Button bsStyle="warning" bsSize="xsmall"
                        onClick={() => UpdateJob(testJob)}>
                        Update Job
                      </Button>
                    </ButtonToolbar>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey={2} title="Current Jobs">
            Enter table here
          </Tab>
          <Tab eventKey={3} title="Completed jobs">
            Enter table here
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default (myJobs);
