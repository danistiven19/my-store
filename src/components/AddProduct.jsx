import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useForm, ErrorMessage } from 'react-hook-form';
import { addProduct } from '../redux/product.action';

const AddProduct = () => {
  const errorMessages = {
    required: 'This field is required',
    maxLength: 'This text is longer than expected'
  };
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = (state) => setShow(true);
  const handleClose = (state) => setShow(false);
  const onSubmit = (product) => {
    product.id = Math.random();
    dispatch(addProduct(product));
    handleClose();
  };

  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        ADD PRODUCT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(onSubmit )} noValidate>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="name" ref={register({ maxLength: { value: 50, message: errorMessages.maxLength }, required: errorMessages.required })}></Form.Control>
            <ErrorMessage as="span" errors={errors} name="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" name="description" ref={register({ maxLength: { value: 100, message: errorMessages.maxLength }})}></Form.Control>
            <ErrorMessage as="span" errors={errors} name="description" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" name="category" ref={register({ maxLength: { value: 50, message: errorMessages.maxLength }, required: errorMessages.required })}></Form.Control>
            <ErrorMessage as="span" errors={errors} name="category" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" ref={register({ maxLength: { value: 5, message: errorMessages.maxLength }, required: errorMessages.required })}></Form.Control>
            <ErrorMessage errors={errors} name="price" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" name="quantity" ref={register({ maxLength: { value: 5, message: errorMessages.maxLength }, required: errorMessages.required })}></Form.Control>
            <ErrorMessage as="span" errors={errors} name="quantity" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
            <Button variant="danger" onClick={handleClose}>
              CANCEL
            </Button>
            <Button type="submit">
              ADD PRODUCT
            </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddProduct;
