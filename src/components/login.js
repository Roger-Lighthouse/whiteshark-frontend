import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  handleChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleUserChange = (event) => {
      this.setState({username: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitMessage({
      username: this.state.username,
      password: this.state.password
    })
    this.setState({username: '', password: ''})
  }
  render() {
    console.log("Rendering <login/>");
    return (
      <div>
          <form className="login"
            onSubmit={this.handleSubmit}>
            <input className="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUserChange} />
            <input type="password"
              className="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange} />
            <input className="login-btn" type="submit" value="Login" />
          </form>
      </div>
    )
  }
}
export default Login;
