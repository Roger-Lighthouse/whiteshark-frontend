import React from 'react';
import {
  Button, Modal, FormGroup
} from 'react-bootstrap'
import BookOddJobForm from './BookOddJobForm'

class BookOddJobModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showModal: false };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

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
              {this.props.jobTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              {this.props.jobDesc}
            </FormGroup>
            <BookOddJobForm
              closeModal={this.close}
              textAreaTitle={this.props.textAreaTitle} // Odd job details
              placeholder={this.props.placeholder} // i.e. brief description of the job
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BookOddJobModal;
