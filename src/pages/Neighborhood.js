import React, {useState} from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';
import neighborhoods from '../assets/data/data_neighborhoods';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Neighborhood() {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleClose = () => setShowModal(false);

    const handleShow = (attraction) => {
        setShowModal(true);
        setModalData(attraction);
    }

    return (
        <Container>
            <Header/>
            <h1>Neighborhoods</h1>
            <Row xs={1} md={2} className="g-4">
                {neighborhoods.map((neighborhood) => (
                    <Col key={neighborhood.id}>
                        <Card>
                            <Card.Img variant="top" src={neighborhood.image}/>
                            <Card.Body>
                                <Card.Title>{neighborhood.name}</Card.Title>
                                <Card.Text>{neighborhood.description}</Card.Text>
                                <Button onClick={() => handleShow(neighborhood)}>Explore</Button>
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
                    <p>{modalData.description}</p>

                </Modal.Body>
            </Modal>
            <Footer/>
        </Container>
    );
}

export default Neighborhood;
