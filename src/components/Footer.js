import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light mt-5">
      <Container fluid className="py-5 border-top border-bottom" style={{ marginTop: '5rem', marginBottom: '1rem' }}>
        <Row>
          <Col md={3} className="ps-4">
            <h5 className="text-start">Attractions</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-muted text-start text-truncate">Three Gorges Dam</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Qingjiang River Gallery</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Three Gorges</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Qu Yuan’s Hometown</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Sanxia Family Scenic Resort</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="ps-4">
            <h5 className="text-start">Travel Tips</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-muted text-start text-truncate">Three Gorges Dam</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Qingjiang River Gallery</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Three Gorges</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Qu Yuan’s Hometown</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Sanxia Family Scenic Resort</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="ps-4">
            <h5 className="text-start">Tour Guide</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-muted text-start text-truncate">2-Day to Xiling Gorge</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Private Tour: Essence of Yichang Day Tour</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">7-Day from Yichang to Zhangjiajie</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Discover Yichang: The Three Gorges</Nav.Link>
              <Nav.Link href="/" className="text-muted text-start text-truncate">Explore Yichang's Rich Cultural Heritage</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <p className="float-end"><a href="/" className="text-muted">Back to top</a></p>
          </Col>
        </Row>
      </Container>
      <div className="text-muted d-flex justify-content-center">
        <p>&copy; Xiangyi Zhou 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
