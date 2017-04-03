import React from 'react'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
const Currency = require('react-currency');

import {
  Button, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap'

// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }
// const jobType = "W1"
//const jobPrice = 75
const yesterday = DateTime.moment().subtract( 1, 'day' );
const valid = function( current ){
    return current.isAfter( yesterday );
};

const BookW1Form = React.createClass({
  componentDidMount () {
    // this.props.dispatch(setW1Price(jobType, jobPrice))
  },

  getInitialState() {
    return {
      selectedDate: '',
      selectedTime: '',
      jobDetails: ''
    };
  },

  render () {
    // let dateChange = () => this.setState({ selectedDate: this.state.value });

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          console.log(this.state)
          var job_info = {
            clientId: this.props.client.current_client.id,
            jobType: this.props.jobType,
            jobPrice: this.props.client.current_w1,
            jobDate: this.state.selectedDate,
            jobTime: this.state.selectedTime,
            jobDetails: this.state.jobDetails
          }
            // this.props.dispatch(bookJob(job_info)
    // ----------------------------------------------------
          //this.props.dispatch(bookJob(this.props.client.current_client))
        //  console.log('Form Submitted: ',
        //    "type", jobType, "date", this.state.selectedDate,
        //    "price", jobPrice)
        }}>
          <FormGroup>
            <ControlLabel>Job Type</ControlLabel>
            <FormControl.Static>
              {this.props.jobType}
            </FormControl.Static>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Job Price</ControlLabel>
            <FormControl.Static>
               {/* <Currency symbol="$" value={ this.props.client.current_w1 * 100} /> */}
            </FormControl.Static>
          </FormGroup>
            <strong>Select date:</strong>
            <DateTime onChange={(d)=>{
                  this.setState({ selectedDate: d.toDate() })
                }} timeFormat={false} isValidDate={ valid } />
            {/* <DateTime onChange={(d)=>{
                  this.setState({selectedTime: d.getHours()})
                }}
              timeConstraints={ hours: { min: 8, max: 12, step: 2 }}
              dateFormat={false}/> */}
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select time:</ControlLabel>
            <FormControl componentClass="select" placeholder="select time"
              value={this.state.value}
              onChange={ (ev) => {
                this.setState({selectedTime: ev.target.value})
              }
            }>
              <option value="8">8 AM</option>
              <option value="10">10 AM</option>
              <option value="12">12 PM</option>
              <option value="0">Anytime</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Additional job details</ControlLabel>
            <FormControl componentClass="textarea"
              placeholder="i.e. call ahead of arrival"
              value={this.state.value}
              onChange={ (ev) => {
                this.setState({jobDetails: ev.target.value})
              }
            }/>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(BookW1Form)
