import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { getSigns } from '../actions/job'
import Spinner from '../images/Spinner.gif'

class Foo extends React.Component {

  componentWillMount () {
    this.props.dispatch(getSigns())
  }

  render() {
    let signs = this.props.job.signs
    return (
      <div>
        <h1>
        Sign Pick Ups {signs ?
           `(${signs.signPickUps.length})` :
        null
      }</h1>

        { (signs) ?

            <Table striped bordered hover>
              <thead>
                <tr>
                <th>Client Name</th>
                  <th>Client Address</th>
                  <th>Client Phone</th>
                </tr>
              </thead>
              <tbody>
                { signs.signPickUps.map((sign) => {
                  return (
                    <tr key={sign.id}>
                      <td>{sign.name}</td>
                      <td>{sign.address}</td>
                      <td>{sign.phone}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            :
            <img id="loadingGif"
            src={Spinner}
            alt='loadingSpinner'
            width="128" height="128"
          />
          }
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    job: state.job,
    signs: state.job.signs
  }
}

export default connect(mapStateToProps)(Foo);
