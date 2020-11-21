import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Question(props) {

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const response = document.querySelector('input[name="answer"]:checked').value;
    props.handleSubmit(false)
    console.log(response)
  }
  const answers = ['first', 'second', 'third', 'fourth']

  const radioData = answers.map((answer) => (
    <Form.Check
                required
                type="radio"
                label={answer}
                name="answer"
                value={answer}
              /> 
  ))

  return (
    <React.Fragment>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
        <Modal
          show={props.showQuestion}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>CATEGORY</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>  
              <div>A question goes here</div>
              {radioData}
              {/* <Form.Check
                required
                type="radio"
                label="first radio"
                name="answer"
                value="first radio"
              /> 
              <Form.Check
                required
                type="radio"
                label="second radio"
                name="answer"
                value="second radio"
              />  */}
              <Button type="submit">
                Close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
    </React.Fragment>
  );

}
export default Question


