import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Please Fill the following details!!!
        <div className=' my-3 border rounded p-3'>

        <FloatingLabel className='mt-3 mb-3' controlId="floatingInputCaption" label="Video Caption">
          <Form.Control type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel className='mb-3' controlId="floatingInputURL" label="Image URL">
          <Form.Control type="text" placeholder="Image URL" />
        </FloatingLabel>
        <FloatingLabel className='mb-3' controlId="floatingInputLink" label="Youtube Video Link">
          <Form.Control type="text" placeholder="Youtube Video Link" />
        </FloatingLabel>
        </div>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    
    
    
    
    </>
  )
}

export default Add