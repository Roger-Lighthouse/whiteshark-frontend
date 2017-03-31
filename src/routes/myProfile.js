import React from 'react';
import Table from 'react-bootstrap'
import Navbar from '../components/Navbar'
import { EditProfile } from '../components/editProfile'
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
        <Navbar />
        <article>
          <p><strong>Name:</strong> Mark Walhberg</p>
          <p><strong>Email:</strong> markyMark@southy.com</p>
          <p><strong>Address:</strong> 11 Boston Way</p>
        </article>
        <EditProfile />
      </div>
    );
  }
});

export default myProfile;
