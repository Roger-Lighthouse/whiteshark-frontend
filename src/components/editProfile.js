import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Collapse
} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const editProfile = () => (

      <div>
        <Button onClick={ ()=>!this.props.open }
          bsStyle="primary" bsSize="xsmall" >
          Edit Profile
        </Button>
        <Collapse in={this.props.open} >
          <form>
            <FormGroup>
              <FieldGroup
                id="formProfileName"
                type="text"
                label="Change Name"
                placeholder="Name"/>

              <FieldGroup
                id="formProfileEmail"
                type="email"
                label="Change Email"
                placeholder="Enter email"/>

              <FieldGroup
                id="formProfileAddress"
                type="text"
                label="ChangeAddress"
                placeholder="Address"/>

              <FieldGroup
                id="formProfilePassword"
                label="Old Password"
                type="password"/>

              <FieldGroup
                id="formProfilePassword"
                label="New Password"
                type="password"/>

              <FieldGroup
                id="formProfilePassword"
                label="New Password"
                type="password"/>
            </FormGroup>

            <Button bsStyle="primary" type="submit">
              Submit
            </Button>
            <Button bsSize="xsmall" type="reset">
              Clear changes
            </Button>
          </form>
        </Collapse>
      </div>
);

export default editProfile;
