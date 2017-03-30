import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

class BookJob extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount () {
    debugger
    // this.props.match.params.id
  }

  handleChange = (event) => this.setState({name: event.target.value});


  handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }

  render() {
    return (
      <div>
        <nav>
          <Navbar />
        </nav>
        <Products />
        {/* <form onSubmit={ () => this.props.dispatch(push('/myJobs'))}>
          <label>
            Name:
            <input type="text" value={this.state.value}
              onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//     return {}
// }

export default connect()(BookJob)
