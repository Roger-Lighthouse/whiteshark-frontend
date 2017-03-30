import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../actions'
import { store } from '../store'
import DateTime from 'react-datetime'
import AddJob from '../containers/AddJob'

import {
  Button, FormGroup, FormControl, ControlLabel, HelpBlock
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
const jobType = "W1"
const jobPrice = 75

const BookW1Form = React.createClass({
  componentDidMount () {
    // this.props.dispatch(setW1Price(jobType, jobPrice))
  },

  getInitialState() {
    return { selectedDate: '' };
  },
  render () {
    // let dateChange = () => this.setState({ selectedDate: this.state.value });

    return (
      <form onSubmit={e => {
        e.preventDefault()
        // dispatch(addJob(input.value))
        console.log('Form Submitted: ',
          "type", jobType, "date", this.state.selectedDate,
          "price", jobPrice)
      }}>
        <FormGroup>
          <ControlLabel>Job Type</ControlLabel>
          <FormControl.Static>
            {jobType}
          </FormControl.Static>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Job Price</ControlLabel>
          <FormControl.Static>
            $ {jobPrice}
          </FormControl.Static>
        </FormGroup>
        <p>
          <strong>Select A date and Time:</strong>
          <DateTime onChange={(d)=>{
                this.setState({selectedDate: d.toDate()})
              }
            }/>
          <br></br>
        </p>
        <AddJob />
        <Button type="submit">
          Submit
        </Button>
      </form>
    )
  }
})
const mapStateToProps = (state) => {
  return {
    job:  state.job
  }
}

export default connect(mapStateToProps)(BookW1Form);
