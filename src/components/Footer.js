import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light mt-5">
      <Container>
        <Row>
          <Col>
            <p className="text-center">&copy; 2023 DiscoverCity. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
