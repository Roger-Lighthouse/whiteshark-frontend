import React from 'react';
import Table from 'react-bootstrap'
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
      <div className="container">
        <Navbar current_client="Kasperi Kapanen"/>
        <div className="center-block">
          <div className="list-group">
            <p><strong>Name:</strong>Mark Walhberg</p>
            <p><strong>Email:</strong>markyMark@southy.com</p>
            <p><strong>Phone Number:</strong>416-222-2345</p>
            <p><strong>Address:</strong>11 Boston Way</p>
          </div>
        </div>
        <EditProfile />
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
