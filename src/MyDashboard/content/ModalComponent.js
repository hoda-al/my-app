import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


function ModalComponent({ showModal, onClose, onAddRow }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [office, setOffice] = useState('');

  const handleSubmit = () => {
    onAddRow({ name, position, office });
    setName('');
    setPosition('');
    setOffice('');
    onClose();
  };

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Row</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formOffice">
            <Form.Label>Office</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter office"
              value={office}
              onChange={(e) => setOffice(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
