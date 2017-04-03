import React, { Component } from 'react';
import {
  Table , Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button
} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../images/WhiteShark.png'
import { connect } from 'react-redux'


class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null
    };
  }

  componentWillMount () {
    //   this.props.dispatch(getAllClients());
  }

  componentDidMount () {
  }

  render() {
    return (
      <div id="admin-container">
        <Navbar />
        <Form horizontal
          onSubmit={e => {
            e.preventDefault()
            console.log(this.state)
            const admin_cred = {
              // clientId,
              email: this.state.email,
              password: this.state.password
            }
            e.reset()
          }}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email"
                value={this.state.value}
                onChange={ (ev) => {
                  this.setState({email: ev.target.value})
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password"
                value={this.state.value}
                onChange={ (ev) => {
                  this.setState({password: ev.target.value})
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in as Admin
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(Admin)
