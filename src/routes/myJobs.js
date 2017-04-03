import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EditMyJobForm from '../components/EditMyJobForm'
import { deleteJob } from '../actions/job'
import { Link } from 'react-router-dom'

import {
  Table, Tabs, Tab, Button, ButtonGroup, Jumbotron
} from 'react-bootstrap'

const DeleteJob = (jobId) => {
  this.props.dispatch(deleteJob(jobId))
}

// const UpdateJob = (job) => {
//   return <EditMyJobForm job={job} />
// }

const upcomingJobs = [
  {
    jobId: 123,
    jobType: 'SDS',
    jobPrice: null,
    jobDate: "April 3, 2017",
    jobTime: "Anytime",
    jobDetails: null
  },
  {
    jobId: 234,
    jobType: 'Painting',
    jobPrice: null,
    jobDate: "May 5, 2017",
    jobTime: "12 PM",
    jobDetails: "Watch out for Tiny!"
  }
]

const currentJobs = []

class myJobs extends React.Component {

  render() {
    return (
      <div id="myJobsContainer">
        <Navbar current_client='Alex' />
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
          <Tab eventKey={1} title="Upcoming Jobs">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Job Type</th>
                  <th>Job Price</th>
                  <th>Job Date</th>
                  <th>Job Time</th>
                  <th>Job Details</th>
                  <th>Modify Job</th>
                </tr>
              </thead>
              <tbody>
                { upcomingJobs.map((job) => {
                  return (
                    <tr key={job.jobId}>
                      <td>{job.jobId}</td>
                      <td>{job.jobType}</td>
                      <td>{job.jobPrice}</td>
                      <td>{job.jobDate}</td>
                      <td>{job.jobTime}</td>
                      <td>{job.jobDetails}</td>
                      <td>
                        <ButtonGroup vertical>
                          <Button bsStyle="danger" bsSize="xsmall"
                            onClick={() => DeleteJob(job.jobId)}>
                            Delete Job
                          </Button>
                            <EditMyJobForm job={job} />
                        </ButtonGroup>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey={2} title="Current Jobs">
            {currentJobs.length === 0 &&
              <Jumbotron>
                <h1>No Current Jobs</h1>
                <p>To book a job, please click the button below.</p>
                <p>
                  <Link to='/'>
                    <Button bsStyle="primary">Book Job</Button>
                  </Link>
                </p>
              </Jumbotron>
            }
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
