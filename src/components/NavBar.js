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

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="logo-nav" />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="nav-link-effect">
            <TooltipWrapper message="Home" tooltipClass="custom-tooltip">
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon className="fa-xl" icon={faHouse} />
              </span>
            </TooltipWrapper>
          </Nav.Link>

          <Nav.Link href="#about" className="nav-link-effect">
            <TooltipWrapper message="About" tooltipClass="custom-tooltip">
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon
                  className="fa-xl mx-4 mx-md-5"
                  icon={faCircleInfo}
                />
              </span>
            </TooltipWrapper>
          </Nav.Link>
          <Nav.Link href="#post" className="nav-link-effect">
            <TooltipWrapper message="Post" tooltipClass="custom-tooltip">
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon className="fa-xl" icon={faSquarePlus} />
              </span>
            </TooltipWrapper>
          </Nav.Link>
        </Nav>
        <Button variant="outline-dark p-1" onClick={handleShow}>
          <img
            src={nobody}
            alt="nobody"
            className="nobody-img rounded-circle"
          />
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
            <Button variant="link" className="text-white" onClick={handleClose}>
              <FontAwesomeIcon className="fa-lg" icon={faTimes} />
            </Button>
          </Offcanvas.Header>
          <hr />
          <Offcanvas.Body className="px-5">
            <Nav className="flex-column">
              <Nav.Link
                href="#login"
                aria-label="Login"
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
                href="#signup"
                aria-label="Sign Up"
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
  );
};

export default NavBar;
