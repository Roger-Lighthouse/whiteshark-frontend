import React from 'react';
import {
  Button, FormGroup, FormControl, ControlLabel, HelpBlock, Collapse, ButtonToolbar
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

class editProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="center-block">
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}
            bsStyle="primary" bsSize="xsmall" >
            Edit Profile
          </Button>
          <Collapse in={this.state.open} >
            <div>
              <form>
                  <FieldGroup
                    id="formControlsName"
                    type="text"
                    label="Change Name"
                    placeholder="Name"/>

                  <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Change Email"
                    placeholder="Enter email"/>

                  <FieldGroup
                    id="formControlsPassword"
                    label="Old Password"
                    type="password"/>

                  <FieldGroup
                    id="formControlsPassword"
                    label="New Password"
                    type="password"/>

                  <FieldGroup
                    id="formControlsPassword"
                    label="Confirm New Password"
                    type="password"/>

                <ButtonToolbar>
                  <Button bsStyle="primary" type="submit">
                    Submit
                  </Button>
                  <Button type="reset">
                    Clear changes
                  </Button>
                </ButtonToolbar>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default editProfile;
