import React, { Component } from 'react';
import Login from '../components/login'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const upcoming = () => <h2>Upcoming jobs</h2>
const inProgress = () => <h2>In progress jobs</h2>
const completed = () => <h2>Completed jobs</h2>

const myJobs = () => <h2>My Jobs</h2>

export default myJobs;

// class myJobs extends Component {
// // 1. up coming jobs 2. inprogress 3. completed
// const Links = ({ routes }) => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/bookJob">Book a job</Link></li>
//         <li><Link to="/myProfile">My Profile</Link></li>
//         <li><Link to="/myJobs">My Jobs</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/bookJob" component={BookJob}/>
//       <Route path="/myProfile" component={myProfile}/>
//       <Route path="/myJobs" component={myJobs}/>
//     </div>
//   </Router>
// )
//
// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )
//
//   myJobs = ({ routes }) => (
//     <Router>
//       <div>
//         <ul>
//           <li><Link to="myJobs/upcoming">Upcoming jobs</Link></li>
//           <li><Link to="myJobs/inProgress">Jobs in progress</Link></li>
//           <li><Link to="myJobs/completed">Completed jobs</Link></li>
//         </ul>
//
//         <hr/>
//
//         <Route path="myJobs/upcoming" component={upcoming}/>
//         <Route path="myJobs/inProgress" component={inProgress}/>
//         <Route path="myJobs/completed" component={completed}/>
//         {/* {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route}/>
//         ))} */}
//       </div>
//     </Router>
//   )
// }
