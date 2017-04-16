import React from 'react'
import { connect } from 'react-redux'
const Currency = require('react-currency');
import {editJob} from '../actions/job'

import {
  Button, FormGroup, FormControl, ControlLabel, Modal
} from 'react-bootstrap'

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const validBookDates = [ "2017-04-18", "2017-04-25" ]

const today = new Date();
const min = new Date( today.getFullYear(), today.getMonth() );
const max = new Date( today.getFullYear() + 1, today.getMonth() );

class EditMyJobForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      selectedDate: this.props.job.sdate,
      selectedTime: this.props.job.stime,
      jobDetails: this.props.job.notes
    };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  render () {
    let job_info = {
                clientId: this.props.job.client_id,
                jobId: this.props.job.id,
                jobType: this.props.job.jobdesc,
                jobPrice: this.props.job.price,
                jobDate: this.state.selectedDate,
                jobTime: this.state.selectedTime,
                jobDetails: this.state.jobDetails
              }

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
            <form onSubmit={ (e) => {
              e.preventDefault()
              this.props.onSubmit(job_info)
              this.close()
            }}>
              <FormGroup>
                <ControlLabel>Job Type</ControlLabel>
                <FormControl.Static>
                  {this.props.job.jobdesc}
                </FormControl.Static>
              </FormGroup>

              { this.props.job.price &&
              <FormGroup>
                <ControlLabel>Job Price</ControlLabel>
                <FormControl.Static>
                   <Currency symbol="$" value={ this.props.job.price * 100} />
                </FormControl.Static>
              </FormGroup>
              }

              <FormGroup>
                <ControlLabel>Select Date:</ControlLabel>
                <InfiniteCalendar
                  onSelect={(date) => {
                    this.setState({ selectedDate: date })
                  }}
                  width={"95%"}
                  height={225}
                  selected={today}
                  disabledDates={validBookDates}
                  min={min}
                  max={max}
                  minDate={today}
                />
              </FormGroup>

              <FormGroup controlId="formControlsSelectTime">
                <ControlLabel>Select time:</ControlLabel>
                <FormControl componentClass="select"
                  defaultValue={this.props.job.stime}
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
                  placeholder={this.props.job.notes ? null : "i.e. call ahead of arrival" }
                  defaultValue={this.props.job.notes}
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
}

export default EditMyJobForm;
