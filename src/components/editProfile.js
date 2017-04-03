import React from 'react';
import { connect } from 'react-redux'
import { editClient } from '../actions/client'
import { push } from 'react-router-redux'

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

// const clientId =  this.props.client.current_client.id

class editProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nameChange: null,
      emailChange: null,
      numberChange: null,
      oldPassword: null,
      newPassword: null,
      confirmNewPass: null
    };
  }
  render() {
    return (
      <div className="container">
        <div className="center-block">
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}
            bsStyle="primary" bsSize="xsmall" >
            Edit Profile
          </Button>
          <Collapse id="editProfileContainer"
            in={this.state.open} >
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  console.log(this.state)
                  var client_info = {
                    // clientId,
                    nameChange: this.state.nameChange,
                    emailChange: this.state.emailChange,
                    numberChange: this.state.numberChange,
                    oldPassword: this.state.oldPassword,
                    newPassword: this.state.newPassword,
                    confirmNewPass: this.state.confirmNewPass
                  }
                  if (this.state.newPassword !== this.state.confirmNewPass) {
                    return alert("Your new password and confirmed password do not match")
                  }

                  // this.props.dispatch(editClient(clientId));
                  this.props.dispatch(push('/'))
                }}>
                <FieldGroup
                  id="formControlsName"
                  type="text"
                  label="Change Name"
                  placeholder="Name"
                  value={this.state.value}
                  onChange={ (ev) => {
                    this.setState({nameChange: ev.target.value})
                  }}
                />

                <FieldGroup
                  id="formControlsEmail"
                  type="email"
                  label="Change Email"
                  placeholder="Enter email"
                  value={this.state.value}
                  onChange={ (ev) => {
                    this.setState({emailChange: ev.target.value})
                  }}
                />

                <FieldGroup
                  id="formControlsPhone"
                  type="number"
                  label="Change Phone Number"
                  placeholder="416-123-4567"
                  value={this.state.value}
                  onChange={ (ev) => {
                    this.setState({numberChange: ev.target.value})
                  }}
                />

                <FormGroup>
                  <ControlLabel>Change Password:</ControlLabel>
                    <FieldGroup
                      id="formControlsPassword"
                      label="Old Password"
                      type="password"
                      value={this.state.value}
                      onChange={ (ev) => {
                        this.setState({oldPassword: ev.target.value})
                      }}
                    />

                    <FieldGroup
                      id="formControlsPassword"
                      label="New Password"
                      type="password"
                      value={this.state.value}
                      onChange={ (ev) => {
                        this.setState({newPassword: ev.target.value})
                      }}
                    />

                    <FieldGroup
                      id="formControlsPassword"
                      label="Confirm New Password"
                      type="password"
                      value={this.state.value}
                      onChange={ (ev) => {
                        this.setState({confirmNewPass: ev.target.value})
                      }}
                    />
                </FormGroup>

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

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(editProfile);
