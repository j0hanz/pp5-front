import React from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faKey, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/Signup.css';

// Signup component
const Signup = ({ show, handleClose, handleShowLogin }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="d-flex justify-content-center p-3 bg-dark position-relative">
        <Modal.Title className="text-center">Sign Up</Modal.Title>
        <Button
          variant="link"
          className="text-white position-absolute end-0 top-0 btn-outline-secondary btn-sm"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </Modal.Header>
      <Modal.Body className="text-center modal-head-bg">
        <Form className="m-3">
          <Form.Group controlId="formBasicUsername" className="mb-3">
            <Form.Label>Create Username:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUserPlus} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Create Username" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Password" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm" className="mb-4">
            <Form.Label>Confirm Password:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Confirm Password" />
            </InputGroup>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className="btn-outline-primary btn-lg" type="submit">
              Sign Up
            </Button>
          </div>
          <p className="mt-4">
            Already have an account?{' '}
            <p className="mt-3">
              <a
                href="#login"
                onClick={() => {
                  handleClose();
                  handleShowLogin();
                }}
                className="btn btn-outline-light"
              >
                Login here!
              </a>
            </p>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
