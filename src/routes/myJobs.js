import React from 'react';
import Navbar from '../components/Navbar'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'
import { connect } from 'react-redux';
import fetchMyJobs from '../actions'
import { store } from '../store'

import {
  Table,
} from 'react-bootstrap'

const myJobsDb = [
  { JobId: 1,
    Address: "231 Sherbourne Rd",
    JobDate: "March 13, 2017",
    jobType: "W1"
  },
  { JobId: 2,
    Address: "22 Spadina Ave",
    JobDate: "April 3, 2017",
    jobType: "SDS"
  },
  { JobId: 3,
    Address: "1 Larry Rd",
    JobDate: "July 20, 2017",
    jobType: "Extra Mile Painting"
  }
]

class myJobs extends React.Component {

  componentDidMount({ dispatch }) {
    dispatch(fetchMyJobs(myJobsDb))
    console.log("store:", store.getState());
  }

  render() {
    return (
      <div>
        <Navbar />
        <h2>My Jobs</h2>
        <VisibleTodoList />
        <Footer list={this.props.list}/>
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
              <td>192879</td>
              <td>231 Sherbourne Rd</td>
              <td>March 13, 2017</td>
              <td>W1</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>208393</td>
              <td>22 Spadina Ave</td>
              <td>April 3, 2017</td>
              <td>SDS</td>
              <td>Upcoming</td>
            </tr>
            <tr>
              <td>209992</td>
              <td>1 Larry Rd</td>
              <td>July 20, 2017</td>
              <td>Extra Mile Painting</td>
              <td>Upcoming</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect()(myJobs);
