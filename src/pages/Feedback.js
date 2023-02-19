import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Feedback() {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2>Feedback</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Feedback;
