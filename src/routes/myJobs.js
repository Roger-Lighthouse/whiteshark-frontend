import React from 'react';
import Navbar from '../components/Navbar'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'

// const upcoming = () => <h2>Upcoming jobs</h2>
// const inProgress = () => <h2>In progress jobs</h2>
// const completed = () => <h2>Completed jobs</h2>

const myJobs = (props) => (
  <div>
    <Navbar />
    <h2>My Jobs</h2>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default myJobs;
