import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EditMyJobForm from '../components/EditMyJobForm'
import SignPickUpModal from '../components/signPickUpModal'
import JobLogModal from '../components/JobLogModal'
import ShowJobLogs from '../components/ShowJobLogs'
import { deleteJob } from '../actions/job'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TakeMoney from '../components/StripeCheckout'
import MyJobsJumbotron from '../components/MyJobsJumbotron'

import {
  Table, Tabs, Tab, Button, ButtonGroup, Jumbotron, DropdownButton
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
    address: "4863 Wellington Street",
    jobType: 'SDS',
    jobPrice: null,
    jobDate: "April 3, 2017",
    jobTime: "Anytime"
  },
  {
    jobId: 234,
    address: "1355 Russell Avenue",
    jobType: 'Painting',
    jobPrice: "$340",
    jobDate: "May 5, 2017",
    jobTime: "12 PM"
  }
]

const currentJobs = []

const completedJobs = [
  {
    jobId: 345,
    address: "4390 René-Lévesque West",
    jobType: 'W4',
    jobPrice: "$150",
    jobDate: "April 3, 2017",
    jobCrew: "Big Bob",
    recStatus: "Paid",
    jobLogs: [
      {
      logId: 111,
      logType: "Job Feedback",
      logComments: "Big Roger is the best",
      logDate: "September 21, 2016"
      }
    ]
  }
]
// Receiveable, PAID
const MarkCompleted = (jobId) => {
  console.log(`Job ${jobId} completed!`);
  // this.props.dispatch(completedJob(jobId))
}

class myJobs extends React.Component {

  render() {
    return (
      <div id="myJobsContainer">
        <Navbar current_client='Alex' />
        <Tabs defaultActiveKey={1} animation={false} id="myJobsContainer">
          <Tab eventKey={1} title="Upcoming Jobs">
            <MyJobsJumbotron title="Upcoming Jobs" jobs={upcomingJobs} />
              {
                upcomingJobs.length > 0 &&
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Job Id</th>
                      <th>Address</th>
                      <th>Job Type</th>
                      <th>Job Price</th>
                      <th>Job Date</th>
                      <th>Job Time</th>
                      <th>Modify Job</th>
                    </tr>
                  </thead>
                  <tbody>
                    { upcomingJobs.map((job) => {
                      return (
                        <tr key={job.jobId}>
                          <td>JB{job.jobId}</td>
                          <td>{job.address}</td>
                          <td>{job.jobType}</td>
                          <td>{job.jobPrice ? job.jobPrice : "TBD"}</td>
                          <td>{job.jobDate}</td>
                          <td>{job.jobTime}</td>
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
              }
            </Tab>
            <Tab eventKey={2} title="Current Jobs">
              <MyJobsJumbotron title="Current Jobs" jobs={currentJobs} />
              {
                currentJobs.length > 0 &&
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Job Id</th>
                      <th>Address</th>
                      <th>Job Type</th>
                      <th>Job Price</th>
                      <th>Job Date</th>
                      <th>Job Time</th>
                      {this.props.client.admin ? <th>Admin Only</th> : null}
                    </tr>
                  </thead>
                  <tbody>
                    { currentJobs.map((job) => {
                      return (
                        <tr key={job.jobId}>
                          <td>JB{job.jobId}</td>
                          <td>{job.address}</td>
                          <td>{job.jobType}</td>
                          <td>{job.jobPrice ? job.jobPrice : "TBD"}</td>
                          <td>{job.jobDate}</td>
                          <td>{job.jobTime}</td>
                          {
                            this.props.client.admin ?
                            <td>
                              <Button bsStyle="success" bsSize="small"
                                onClick={() => MarkCompleted(job.jobId)}>
                                Mark Completed
                              </Button>
                            </td>
                            : null
                          }
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              }
            </Tab>
            <Tab eventKey={3} title="Completed jobs">
              <MyJobsJumbotron title="Completed Jobs" jobs={completedJobs} />
                {
                  completedJobs.length > 0 &&
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Job Id</th>
                        <th>Address</th>
                        <th>Job Type</th>
                        <th>Job Price</th>
                        <th>Date Completed</th>
                        <th>Job Crew</th>
                        <th>Rec Status</th>
                        <th>Job Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { completedJobs.map((job) => {
                        return (
                          <tr key={job.jobId}>
                            <td>JB{job.jobId}</td>
                            <td>{job.address}</td>
                            <td>{job.jobType}</td>
                            <td>{job.jobPrice}</td>
                            <td>{job.jobDate}</td>
                            <td>{job.jobCrew}</td>
                            <td>{job.recStatus}</td>
                            <td>
                              <ButtonGroup vertical>
                                <TakeMoney amount="8000" jobid='36'/>
                                <DropdownButton title="Job Actions" id="jobActionsDropDown">
                                  <SignPickUpModal title="Sign Pick Up"
                                    commentTitle="Additional notes: i.e. if the sign was moved"
                                    btnName="Request Sign Pick Up" jobId={job.jobId}
                                  />
                                  <JobLogModal title="Quality Issue"
                                    commentTitle="We are very sorry if you are not satified with our service, please tell us more about your experience"
                                    btnName="Send Quality Issue" jobId={job.jobId}
                                  />
                                  <JobLogModal title="Job Feedback"
                                    commentTitle="Please tell us how we did"
                                    btnName="Send Feedback" jobId={job.jobId}
                                  />
                                </DropdownButton>
                                <ShowJobLogs jobId={job.jobId} jobLogs={job.jobLogs}/>
                              </ButtonGroup>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                }
            </Tab>
          </Tabs>
        <Footer/>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    job: state.job,
    client: state.client
  }
}

export default connect(mapStateToProps)(myJobs);
