import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css';

// Footer component
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-2">
      <Container fluid>
        <Row className="align-items-center">
          <Col className="px-1">
            <p className="mb-0 text-white-50">
              <FontAwesomeIcon className="fa-sm px-1" icon={faCopyright} />
              2024 Blog Beat
            </p>
          </Col>
          <Col className="px-1">
            <div className="social-links fa-lg text-end">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
