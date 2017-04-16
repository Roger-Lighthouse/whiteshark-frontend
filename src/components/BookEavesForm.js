import React, { Component } from 'react'
import { connect } from 'react-redux'
const Currency = require('react-currency');
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

class BookEavesForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eavesType: null,
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
          var job_info = {
            clientId: this.props.client.current_client.id,
            jobType: 'EH',
            jobPrice: this.props.eh,
            jobDate: this.state.selectedDate,
            jobTime: this.state.selectedTime,
            jobDetails: this.state.jobDetails
          }
          this.props.closeModal()
          console.log(job_info)
            this.props.dispatch(bookJob(job_info))
        }}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Job Type:</ControlLabel>
          <FormControl componentClass="select" placeholder="select Job Type"
            value={this.state.value}
            onChange={ (ev) => {
              this.setState({eavesType: ev.target.value})
            }
          } style={{width: '85%'}} >
            <option value="EH">Clean interior of house eaves [EH]</option>
            {/*<option value="EG">Clean interior of garage eaves [EG]</option>
            <option value="DSC">Clean the mouth of down spout and install downspout cage [DSC]</option>
            <option value="SDS">Snake downspouts and remove any clogs [SDS]</option>*/}
          </FormControl>
        </FormGroup>

          <FormGroup>
            <ControlLabel>Job Price</ControlLabel>
            <FormControl.Static>
              { <Currency symbol="$" value={ this.props.eh * 100} /> }
            </FormControl.Static>
          </FormGroup>

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

export default connect(mapStateToProps)(BookEavesForm)
