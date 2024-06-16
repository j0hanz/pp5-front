import React from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/Login.css'; // Import the CSS file for custom styles

const Login = ({ show, handleClose, handleShowSignup }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="d-flex justify-content-center p-3 bg-dark position-relative">
        <Modal.Title className="text-center">Login</Modal.Title>
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
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Enter username" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-4">
            <Form.Label>Password:</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Password" />
            </InputGroup>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className="btn-outline-primary btn-lg" type="submit">
              Login
            </Button>
          </div>
          <p className="mt-4">
            Don't have an account?{' '}
            <p className="mt-3">
              <a
                href="#signup"
                onClick={() => {
                  handleClose();
                  handleShowSignup();
                }}
                className="btn btn-outline-light"
              >
                Sign up now!
              </a>
            </p>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
