import React from 'react';
import AddJob from '../containers/AddJob'
import {
  Button, Modal
} from 'react-bootstrap'
import BookW1Form from './bookW1Form.js'

const BookJobModal = React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          block
          onClick={this.open}>
          Book Job
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              Book an External Window Cleaning
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong>
              No removal of window, storm or screen.
              Remove loose dirt and water from sills.
            </strong>
            <p>
              <BookW1Form />
              <AddJob />
            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default BookJobModal;
