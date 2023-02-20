import React, {useState} from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';
import events from '../assets/data/data_events';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Event() {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleClose = () => setShowModal(false);

    const handleShow = (event) => {
        setShowModal(true);
        setModalData(event);
    };

    return (
        <Container>
            <Header/>
            <h1>Events</h1>
            <Row xs={1} md={2} className="g-4">
                {events.map((event) => (
                    <Col key={event.id}>
                        <Card>
                            <Card.Img variant="top" src={event.image}/>
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>{event.date}</Card.Text>
                                <Button onClick={() => handleShow(event)}>View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{modalData.title}</p>
                    <p>{modalData.description}</p>
                    <p>Date: {modalData.date}</p>
                    <p>Time: {modalData.time}</p>
                    <p>Location: {modalData.location}</p>
                    <p>Price: {modalData.price}</p>
                    <p>Website: {modalData.website}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" href={modalData.website}>
                        Visit Website
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer/>
        </Container>
    );
}

export default Event;
