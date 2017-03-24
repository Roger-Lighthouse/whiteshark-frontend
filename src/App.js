import React, { Component } from 'react'
import Home from './home'
import BookJob from './bookJob'
import myProfile from './myProfile'
import myJobs from './myJobs'
import Login from './login'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BeerList = (props) => {
  return (
    <ul>
      { props.beers.map ( beer => { return <Beer key={beer.id} {...beer} /> } ) }
    </ul>
  )
}
const Beer = (props) => {
  return (
    <li>{props.name}</li>
  )
}

const Links = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookJob">Book a job</Link></li>
        <li><Link to="/myProfile">My Profile</Link></li>
        <li><Link to="/myJobs">My Jobs</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/bookJob" component={BookJob}/>
      <Route path="/myProfile" component={myProfile}/>
      <Route path="/myJobs" component={myJobs}/>
    </div>
  </Router>
)

class App extends Component {
  constructor() {
    super()
    this.state = {beers: []}
  }

  handleSubmitMessage = (cred) => {
    console.log("login submitting...");
    console.log("Cred:", cred);
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: cred.username,
        password: cred.password,
      })
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/beers')
    .then( resp => {
      return resp.json()
    })
    .then( json => {
      var beers = json.beers;
      this.setState({beers})
    })
  }
  render() {
    return (
      <div className="App">
        <nav>Login
          <Login onSubmitMessage={this.handleSubmitMessage}/>
        </nav>
        <h1>Beers</h1>
        <BeerList beers={this.state.beers} />
        <Links/>
      </div>
    );
  }
}

export default App;
