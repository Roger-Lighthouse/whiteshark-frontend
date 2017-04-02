import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../actions'
import { store } from '../store'
import DateTime from 'react-datetime'
import AddJob from '../containers/AddJob'
import { bookJob } from '../actions/job'
const Currency = require('react-currency');



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
//const jobPrice = 75

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
        console.log("W1 PRICE>>>>>", this.state.selectedTime)
        var job_info={clientId: this.props.client.current_client.id,
            jobDesc: 'W1',
            jobPrice: this.props.client.current_w1,
            jobDate: this.state.selectedDate,
            jobTime: this.state.selectedTime
          }
        //this.props.dispatch(bookJob(this.props.client.current_client))
        this.props.dispatch(bookJob(job_info))
      //  console.log('Form Submitted: ',
      //    "type", jobType, "date", this.state.selectedDate,
      //    "price", jobPrice)
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
            <Currency symbol="$" value={ this.props.client.current_w1 * 100} />
          </FormControl.Static>
        </FormGroup>
        <p>
          <strong>Select A date and Time:</strong>
          <DateTime onChange={(d)=>{
                this.setState({selectedDate: d.toDate()})
               // this.setState({selectedTime: d.getHours()})
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
       client: state.client
     }
  }

export default connect(mapStateToProps)(BookW1Form)


