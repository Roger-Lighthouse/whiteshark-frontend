import React from 'react';
import { Table, Well } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import EditProfile from '../components/editProfile'
import Footer from '../components/Footer'
import { connect } from 'react-redux'

// import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Collapse
// } from 'react-bootstrap'

// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }

const myProfile = React.createClass ({
  getInitialState() {
    return { open: false };
  },
  render() {
    let current_client = this.props.client.current_client
    return (
      <div>
        <div className="container">
          <Navbar current_client={current_client.name}/>
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
            </div>
          </div>
          <EditProfile client={current_client} />
        </div>
        <Footer />
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(myProfile);
