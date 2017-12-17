import React, { Component } from 'react';
import { Well } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import EditProfile from '../components/editProfile'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { editClient } from "../actions/client"

class myProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleOnSubmit = (client_info) => {
    this.props.dispatch(editClient(client_info))
  }

  render() {
    let current_client = this.props.client.current_client
    return (
      <div>
        <nav>
          <Navbar current_client={current_client.name} id={current_client.id}/>
        </nav>
        <div id="myProfileContainer">
          <div className="center-block">
            <div className="list-group">
              <p><strong>Name:</strong></p>
              <Well bsSize="small">
                {current_client.name}
              </Well>
              <p><strong>Email:</strong></p>
              <Well bsSize="small">
              {current_client.email}
              </Well>
              <p><strong>Phone Number:</strong></p>
              <Well bsSize="small">
                {current_client.phone}
              </Well>
              <p><strong>Address:</strong></p>
              <Well bsSize="small">
                {current_client.address}
              </Well>
              <p><strong>Source:</strong></p>
              <Well bsSize="small">
                i.e. Live, Web, Lead, card, Voicemail
              </Well>
            </div>
          </div>
          <EditProfile client={current_client}
            handleOnSubmit={this.handleOnSubmit} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(myProfile);
