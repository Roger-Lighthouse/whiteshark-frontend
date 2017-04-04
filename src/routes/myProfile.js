import React from 'react';
import { Table, Well } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import EditProfile from '../components/editProfile'
import Footer from '../components/Footer'
// import { connect } from 'react-redux'

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
    return (
      <div>
        <div className="container">
          <Navbar current_client="Kasperi Kapanen"/>
          <div className="center-block">
            <div className="list-group">
              <p><strong>Name:</strong></p>
              <Well bsSize="small">
                Mark Walhberg
              </Well>
              <p><strong>Email:</strong></p>
              <Well bsSize="small">
              markyMark@southy.com
              </Well>
              <p><strong>Phone Number:</strong></p>
              <Well bsSize="small">
                416-222-2345
              </Well>
              <p><strong>Address:</strong></p>
              <Well bsSize="small">
                11 Boston Way
              </Well>
            </div>
          </div>
          <EditProfile />
        </div>
        <Footer />
      </div>
    );
  }
});

// const mapStateToProps = (state) => {
//   return {
//     client: state.client
//   }
// }

export default myProfile;
