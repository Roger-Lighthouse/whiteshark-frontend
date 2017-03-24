import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js';

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
        <h1>Beers</h1>
        <BeerList beers={this.state.beers} />
        <div>Login
          <Login onSubmitMessage={this.handleSubmitMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
