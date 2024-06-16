import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faArrowRightToBracket,
  faUserPlus,
  faCircleInfo,
  faSquarePlus,
  faTimes,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.webp';
import nobody from '../assets/nobody.webp';
import './styles/NavBar.css';
import TooltipWrapper from './TooltipWrapper';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);

  return (
    <>
      <Navbar className="navbar-dark bg-dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" className="logo-nav" />
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-link-effect">
              <TooltipWrapper message="Home" tooltipClass="custom-tooltip">
                <span className="d-inline-flex align-items-center">
                  <FontAwesomeIcon
                    className="fa-xl mx-3 mx-md-5"
                    icon={faHouse}
                  />
                </span>
              </TooltipWrapper>
            </Nav.Link>

            <Nav.Link href="#about" className="nav-link-effect">
              <TooltipWrapper message="About" tooltipClass="custom-tooltip">
                <span className="d-inline-flex align-items-center">
                  <FontAwesomeIcon
                    className="fa-xl mx-3 mx-md-5"
                    icon={faCircleInfo}
                  />
                </span>
              </TooltipWrapper>
            </Nav.Link>
            <Nav.Link href="#post" className="nav-link-effect">
              <TooltipWrapper message="Post" tooltipClass="custom-tooltip">
                <span className="d-inline-flex align-items-center">
                  <FontAwesomeIcon
                    className="fa-xl mx-3 mx-md-5"
                    icon={faSquarePlus}
                  />
                </span>
              </TooltipWrapper>
            </Nav.Link>
          </Nav>
          <Button variant="outline-dark p-1" onClick={handleShow}>
            <TooltipWrapper message="Profile" tooltipClass="custom-tooltip">
              <img
                src={nobody}
                alt="nobody"
                className="nobody-img rounded-circle"
              />
            </TooltipWrapper>
          </Button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className="bg-dark text-white custom-offcanvas-width px-4 py-2"
          >
            <Offcanvas.Header>
              <img
                src={nobody}
                alt="nobody"
                className="nobody-img-toggle rounded-circle"
              />
              <Offcanvas.Title className="mx-auto">User</Offcanvas.Title>
              <Button
                variant="link"
                className="text-white btn-outline-secondary btn-sm"
                onClick={handleClose}
              >
                <FontAwesomeIcon className="fa-lg" icon={faTimes} />
              </Button>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body className="px-5">
              <Nav className="flex-column">
                <Nav.Link
                  onClick={() => {
                    handleClose();
                    handleShowLogin();
                  }}
                  className="text-white d-flex align-items-center btn btn-dark rounded p-2 border my-2"
                >
                  <FontAwesomeIcon
                    className="fa-xl"
                    icon={faArrowRightToBracket}
                  />
                  <span className="mx-auto">Login</span>
                  <FontAwesomeIcon className="fa-xl" icon={faAngleRight} />
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    handleClose();
                    handleShowSignup();
                  }}
                  className="text-white d-flex align-items-center btn btn-dark rounded p-2 border my-2"
                >
                  <FontAwesomeIcon className="fa-xl" icon={faUserPlus} />
                  <span className="mx-auto">Sign Up</span>
                  <FontAwesomeIcon className="fa-xl" icon={faAngleRight} />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
      <Login
        show={showLogin}
        handleClose={handleCloseLogin}
        handleShowSignup={handleShowSignup}
      />
      <Signup
        show={showSignup}
        handleClose={handleCloseSignup}
        handleShowLogin={handleShowLogin}
      />
    </>
  );
};

export default NavBar;
