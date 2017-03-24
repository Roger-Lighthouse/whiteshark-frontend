import React, { Component } from 'react'
import Home from './home'
import BookJob from './bookJob'
import MyProfile from './myProfile'
// import myJobs from './myJobs'
import Login from './login'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Upcoming = () => <h2>Upcoming jobs</h2>
const InProgress = () => <h2>In progress jobs</h2>
const Completed = () => <h2>Completed jobs</h2>

const MyJobs = ({ routes }) => (
  <div>
    <h2>My Jobs</h2>
    <ul>
      <li><Link to="/myJobs/upcoming">Upcoming jobs</Link></li>
      <li><Link to="/myJobs/inProgress">Jobs in progress</Link></li>
      <li><Link to="/myJobs/completed">Completed jobs</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const routes = [
  { path: '/',
    component: Home
  },
  { path: '/bookJob',
    component: BookJob
  },
  { path: '/myProfile',
    component: MyProfile
  },
  { path: '/myJobs',
    component: MyJobs,
    routes: [
      { path: '/myJobs/upcoming',
        component: Upcoming
      },
      { path: '/myJobs/inprogress',
        component: InProgress
      },
      { path: '/myJobs/completed',
        component: Completed
      }
    ]
  }
]
// const BeerList = ({ beers }) => (
//   <ul>
//     { beers.map((beer) => <Beer key={beer.id} {...beer} />) }
//   </ul>
// )
//
// const Beer = (props) => {
//   return (
//     <li>{props.name}</li>
//   )
// }

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const Links = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookJob">Book a job</Link></li>
        <li><Link to="/myProfile">My Profile</Link></li>
        <li><Link to="/myJobs">My Jobs</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

class App extends Component {

  state = { beers: [], user: null }

  handleSubmitMessage = (cred) => {
    console.log("login submitting...");
    console.log("Cred:", cred);
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         username: cred.username,
         password: cred.password
      })
    })
    .then(resp => resp.json())
    .then(({ user }) => this.setState({user: user.name}))
  }

  componentDidMount() {
    fetch('http://localhost:3000/beers')
    .then(resp => resp.json())
    .then(({ beers }) => this.setState({ beers }))
  }


  render() {
    return (
      <div className="App">
        <nav>Login is {this.state.user}
          <Login onSubmitMessage={this.handleSubmitMessage}/>
        </nav>
        <h1>Beers</h1>
        {/* <BeerList beers={this.state.beers} /> */}
        <Links/>
      </div>
    );
  }
}

export default App;
