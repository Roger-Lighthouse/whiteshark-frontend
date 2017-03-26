import React from 'react'
import BookJob from './routes/bookJob'
import MyJobs from './routes/myJobs'
import W1 from './routes/W1'
import MyProfile from './routes/myProfile'

import { createStore } from "redux"

import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = (props) => (
    <Router>
      <div>
        <Route exact path='/' component={BookJob}/>
        <Route exact path='/myJobs' component={MyJobs}/>
        <Route exact path='/myJobs/w1' component={W1}/>
        <Route path='/myProfile' component={MyProfile}/>
      </div>
    </Router>
)
export default App;

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



// class App extends Component {
//
//   state = { beers: [], user: null }
//
//   handleSubmitMessage = (cred) => {
//     console.log("login submitting...");
//     console.log("Cred:", cred);
//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//        'Accept': 'application/json',
//         'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({
//          username: cred.username,
//          password: cred.password
//       })
//     })
//     .then(resp => resp.json())
//     .then(({ user }) => this.setState({user: user.name}))
//   }
//
//   componentDidMount() {
//     fetch('http://localhost:3000/beers')
//     .then(resp => resp.json())
//     .then(({ beers }) => this.setState({ beers }))
//   }


//   render() {
//     return (
//       <div className="App">
//         {/* <nav>Login is {this.state.user}
//           <Login onSubmitMessage={this.handleSubmitMessage}/> */}
//         {/* </nav> */}
//         {/* <h1>Beers</h1> */}
//         {/* <BeerList beers={this.state.beers} /> */}
//         <Links/>
//       </div>
//     );
//   }
// }
