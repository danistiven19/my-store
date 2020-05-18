import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const AddProduct = () => {
  const [show, setShow] = useState(false);
  const handleOpen = (state) => setShow(true);
  const handleClose = (state) => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        ADD PRODUCT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Form>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" maxLength="100" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" maxLength="5" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" maxLength="5" required></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
            <Button variant="danger" onClick={handleClose}>
              CANCEL
            </Button>
            <Button>
              ADD PRODUCT
            </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddProduct;
