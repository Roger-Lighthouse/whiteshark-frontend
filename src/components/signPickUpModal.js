import React from 'react';
import { connect } from 'react-redux'
import {
  Table, Tabs, Tab, Button, ButtonGroup
} from 'react-bootstrap'

class signPickUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signPickUp : false
    }
  }

  handleClick() {
    this.setState({signPickUp: true});
  }

  render() {
    let signPickUp = this.state.signPickUp;
    return (
      <Button
        bsStyle="primary"
        disabled={signPickUp}
        onClick={() => reqSignPU(job)}
        onClick={!signPickUp ? this.handleClick : null}>
        {signPickUp ? 'Sign Pick-Up Requested' : 'Request Sign Pick-Up'}
      </Button>
    )
  }
}

const reqSignPU = (job) {
  var log_info = {
    jobID: job.jobId,
    logType: 'Sign Pick Up',     // Sign Pick Up, Job Feedback
    logComments: 'Test Log'
  }
  this.props.dispatch(logItem(log_info))
}

const mapStateToProps = (state) => {
  return {
    client: state.job
  }
}

export default connect(mapStateToProps)(myJobs);
