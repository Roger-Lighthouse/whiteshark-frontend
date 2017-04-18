import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bookJob } from '../actions/job'

import {
  Button, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap'
const Currency = require('react-currency');

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import format from 'date-fns/format'

const disabledDates = ["2017-04-18", "2017-04-25"]

const availableTimes = { "2017-04-24": ["Anytime","10 AM", "12 AM"], "2017-05-01": ["8 AM"] }



const today = new Date();
const min = new Date( today.getFullYear(), today.getMonth() );
const max = new Date( today.getFullYear() + 1, today.getMonth() );

class BookW1Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
        selectedDate: today,
        selectedTime: 'Anytime',
        jobDetails: null,
        dateTimes: [ 'Anytime', '8 AM', '10 AM', '12 PM' ]
    }
  }

  handleOnSelectDate = (date) => {
    this.setState({ selectedDate: date })
    for (let d in availableTimes) {
      // console.log(d, date);
      if (date === d) {
        // console.log('Match!');
        return this.setState({
          dateTimes: availableTimes[d],
          selectedTime: availableTimes[d][0]
        })
      }
    }
    this.setState({
      dateTimes: [ 'Anytime', '8 AM', '10 AM', '12 PM' ]
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    var job_info = {
      // clientId: this.props.client.current_client.id,
      jobType: this.props.jobType,
      jobPrice: this.props.price,  //this.props.client.current_w1,
      jobDate: this.state.selectedDate,
      jobTime: this.state.selectedTime,
      jobDetails: this.state.jobDetails
    }
    console.log(job_info)
    // this.props.dispatch(bookJob(job_info))
    this.props.closeModal()
  }
  render () {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>

          <FormGroup>
            <ControlLabel>Job Type</ControlLabel>
            <FormControl.Static>
              {this.props.jobType}
            </FormControl.Static>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Job Price</ControlLabel>
            <FormControl.Static>
              {this.props.price === "TBD" ? "TBD" : <Currency symbol="$" value={ this.props.price * 100} />}
            </FormControl.Static>
          </FormGroup>
          <FormGroup>
            <strong>Select date:</strong>
            <InfiniteCalendar
              onSelect={(date) => { this.handleOnSelectDate(format(date, 'YYYY-MM-DD')) }}
              width={"95%"}
              height={225}
              selected={today}
              disabledDates={disabledDates}
              min={min}
              max={max}
              minDate={today}
            />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select time:</ControlLabel>
            <FormControl componentClass="select"
              onChange={ (ev) => {
                this.setState({selectedTime: ev.target.value})
              }
            }>
            {
              this.state.dateTimes.map( (time) => {
              return <option key={time} value={time}>{time}</option>
            })
            }
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
}

const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}

export default connect(mapStateToProps)(BookW1Form)
