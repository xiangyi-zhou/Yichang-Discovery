import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import yichangImages from '../assets/data/yichangImages';
import Footer from "../components/Footer";
import Header from "../components/Header";

function Gallery() {
    return (
        <Container>
            <Header/>
            <h1>Photo Gallery</h1>
            <Row xs={1} sm={2} md={3}>
                {yichangImages.map((image, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Img variant="top" src={image.image}/>
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                                <Card.Text>{image.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Footer/>
        </Container>

    );
}

export default Gallery;
