import React from 'react'
import { connect } from 'react-redux'
import { bookJob } from '../actions/job'

import {
  Button, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap'

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const validBookDates = [ "2017-04-18", "2017-04-25" ]

const today = new Date();
const min = new Date( today.getFullYear(), today.getMonth() );
const max = new Date( today.getFullYear() + 1, today.getMonth() );

class BookOddJobForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: null,
      selectedTime: 'Anytime',
      jobDetails: null
    };
  }

  render () {

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          console.log(this.state)
          var job_info = {
            clientId: this.props.client.current_client.id,
            jobType: "OddJob",
            jobDate: this.state.selectedDate,
            jobTime: this.state.selectedTime,
            jobDetails: this.state.jobDetails
          }
          this.props.closeModal()
            this.props.dispatch(bookJob(job_info))
        }}>
          <strong>Select date:</strong>
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

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select time:</ControlLabel>
            <FormControl componentClass="select" placeholder="select time"
              value={this.state.value}
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
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>{this.props.textAreaTitle}</ControlLabel>
            <FormControl componentClass="textarea"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={ (ev) => {
                this.setState({jobDetails: ev.target.value})
              }
            }/>
            <FormControl.Static>
              A representative will call you shortly to confirm your booking details.
            </FormControl.Static>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(BookOddJobForm)
