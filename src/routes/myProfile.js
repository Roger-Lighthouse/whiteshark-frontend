import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button
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

const myProfile = () => {

  return (
    <div>
    <h1> Welcome to your Profile!</h1>
      <form>
        <FormGroup>
          <ControlLabel>Client Name</ControlLabel>
          <FormControl.Static>
            John Doe
          </FormControl.Static>
        <ControlLabel>Change Name</ControlLabel>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"/>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Registered Email(s)</ControlLabel>
          <FormControl.Static>
            email@example.com
          </FormControl.Static>
        <ControlLabel>Change Email</ControlLabel>
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"/>
        </FormGroup>

        <FieldGroup
          id="formControlsPassword"
          label="Password"
          type="password"/>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default myProfile;
