import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js';

const BeerList = ({ beers }) => (
  <ul>
    { beers.map((beer) => <Beer key={beer.id} {...beer} />) }
  </ul>
)

const Beer = (props) => {
  return (
    <li>{props.name}</li>
  )
}

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
        <h1>Beers</h1>
        <BeerList beers={this.state.beers} />
        <div>Login is {this.state.user}
          <Login onSubmitMessage={this.handleSubmitMessage}/>
        </div>
      </div>
    );
  }
}

export default App;