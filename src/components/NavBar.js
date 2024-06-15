import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  OverlayTrigger,
  Tooltip,
  Offcanvas,
  Container,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faArrowRightToBracket,
  faUserPlus,
  faCircleInfo,
  faSquarePlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.webp';
import nobody from '../assets/nobody.webp';
import './styles/NavBar.css';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props, message) => (
    <Tooltip id={`tooltip-${message.toLowerCase()}`} {...props}>
      {message}
    </Tooltip>
  );

  return (
    <Navbar className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="logo-nav" />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 150, hide: 400 }}
              overlay={(props) => renderTooltip(props, 'Home')}
            >
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon
                  className="fa-lg translate-middle-x"
                  icon={faHouse}
                />
              </span>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link href="#about">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 150, hide: 400 }}
              overlay={(props) => renderTooltip(props, 'About')}
            >
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon
                  className="fa-lg mx-5 translate-middle-x"
                  icon={faCircleInfo}
                />
              </span>
            </OverlayTrigger>
          </Nav.Link>
          <Nav.Link href="#newpost">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 150, hide: 400 }}
              overlay={(props) => renderTooltip(props, 'New Post')}
            >
              <span className="d-inline-flex align-items-center">
                <FontAwesomeIcon
                  className="fa-lg translate-middle-x"
                  icon={faSquarePlus}
                />
              </span>
            </OverlayTrigger>
          </Nav.Link>
        </Nav>
        <Button variant="outline-light p-1" onClick={handleShow}>
          <img src={nobody} alt="nobody" className="nobody-img" />
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="bg-dark text-white"
        >
          <Offcanvas.Header>
            <Offcanvas.Title>User Menu</Offcanvas.Title>
            <Button variant="link" className="text-white" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Offcanvas.Header>
          <hr />
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="#login" aria-label="Login" className="text-white">
                <FontAwesomeIcon
                  className="fa-lg"
                  icon={faArrowRightToBracket}
                />{' '}
                Login
              </Nav.Link>
              <Nav.Link
                href="#signup"
                aria-label="Sign Up"
                className="text-white"
              >
                <FontAwesomeIcon className="fa-lg" icon={faUserPlus} /> Sign Up
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
