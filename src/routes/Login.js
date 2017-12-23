import React, { Component } from 'react';
// import Footer from '../components/Footer'
import { connect } from 'react-redux'

class Login extends Component {

  render () {
    return (
      <div id='loginForm'>
        <h1>Test Login</h1>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(Login)
