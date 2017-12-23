import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'




class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let current_client = this.props.client.current_client

    if (current_client) {
      return (
        <div>
        WELCOME HOME {current_client.name}
        <button onClick={() => this.props.dispatch(push('/clients/{current_client.id/myJobs}'))}>My Job</button>

        </div>
      )

    } else {
      return (
        <div>
        NO ONE IS SIGNED IN
        <br/>
        <button onClick={() => this.props.dispatch(push('/login'))}>Log in</button>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(Home);
