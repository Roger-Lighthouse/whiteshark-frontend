import React from 'react'
import { connect } from 'react-redux'
import DateTime from 'react-datetime'
const Currency = require('react-currency');

import {
  Button, FormGroup, FormControl, ControlLabel, Modal
} from 'react-bootstrap'

const yesterday = DateTime.moment().subtract( 1, 'day' );
const valid = function( current ){
    return current.isAfter( yesterday );
};

const EditMyJobForm = React.createClass({
  componentDidMount () {
    // this.props.dispatch(setW1Price(jobType, jobPrice))
  },

  getInitialState() {
    return {
      showModal: false,
      selectedDate: this.props.job.jobDate,
      selectedTime: this.props.job.jobTime,
      jobDetails: this.props.job.jobDetails
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render () {

    return (
      <div>
        <Button
          bsStyle="warning"
          bsSize="xsmall"
          onClick={this.open}>
          Update Job
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              Update Job
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={e => {
              e.preventDefault()
              console.log(this.state)
              var job_info = {
                clientId: this.props.client.current_client.id,
                jobId: this.props.job.jobId,
                jobType: this.props.job.jobType,
                jobPrice: this.props.job.jobPrice,
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
                  {this.props.job.jobType}
                </FormControl.Static>
              </FormGroup>

              { this.props.job.jobPrice &&
              <FormGroup>
                <ControlLabel>Job Price</ControlLabel>
                <FormControl.Static>
                   <Currency symbol="$" value={ this.props.job.jobPrice * 100} />
                </FormControl.Static>
              </FormGroup>
              }

              <FormGroup>
                <ControlLabel>Select Date:</ControlLabel>
                  <DateTime onChange={(d)=>{
                      this.setState({ selectedDate: d.toDate() })
                    }} timeFormat={false} isValidDate={ valid }
                  defaultValue={this.props.job.jobDate}/>
              {/* <DateTime onChange={(d)=>{
                    this.setState({selectedTime: d.getHours()})
                  }}
                timeConstraints={ hours: { min: 8, max: 12, step: 2 }}
                dateFormat={false}/> */}
              </FormGroup>

              <FormGroup controlId="formControlsSelectTime">
                <ControlLabel>Select time:</ControlLabel>
                <FormControl componentClass="select"
                  placeholder={this.props.job.jobTime}
                  onChange={ (ev) => {
                    this.setState({selectedTime: ev.target.value})
                  }
                }>
                  <option value="Anytime">Anytime</option>
                  <option value="8 AM">8 AM</option>
                  <option value="10 AM">10 AM</option>
                  <option value="12 PM">12 PM</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="formControlsAddJobDetails">
                <ControlLabel>Additional job details</ControlLabel>
                <FormControl componentClass="textarea"
                  placeholder={this.props.job.jobDetails ? null : "i.e. call ahead of arrival" }
                  defaultValue={this.props.job.jobDetails}
                  onChange={ (ev) => {
                    this.setState({jobDetails: ev.target.value})
                  }
                }/>
              </FormGroup>
              <Button type="submit">
                Submit
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    client: state.job
  }
}

export default connect(mapStateToProps)(EditMyJobForm)
