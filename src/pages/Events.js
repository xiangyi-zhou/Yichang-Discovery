import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Events() {
  return (
    <div>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Image src="https://via.placeholder.com/400" fluid />
          </Col>
          <Col md={6}>
            <h2>Events</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum consectetur lorem, ac dignissim libero consequat eget. Nam dignissim facilisis tristique. Vestibulum aliquet faucibus orci, non dapibus lacus. Vestibulum condimentum elit a elit semper dapibus. Nullam feugiat rhoncus nulla id feugiat. Ut ultricies tellus vitae erat dictum, ut varius felis hendrerit.</p>
            <Button variant="primary">Learn more</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Events;
