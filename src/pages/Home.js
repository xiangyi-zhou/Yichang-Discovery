import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';

import {Container, Row, Col} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(111.278069);
    const [lat] = useState(30.701920);
    const [zoom] = useState(9);
    mapboxgl.accessToken = 'YOUR TOKEN';
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
        <>
            <Header/>
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <h2>Welcome to PlanX</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum c
                            onsectetur lorem, ac dignissim libero consequat eget. Nam dignissim facilisis tristique. V
                            estibulum aliquet faucibus orci, non dapibus lacus. Vestibulum condimentum elit a elit
                            semper dapibus. Nullam feugiat rhoncus nulla id feugiat. Ut ultricies tellus vitae erat
                            dictum, ut varius felis hendrerit.</p>
                    </Col>
                    <Col>
                        <div ref={mapContainer} className="map-container"/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;

