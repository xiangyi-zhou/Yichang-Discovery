import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';

import {Container, Row, Col, Carousel} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img_yichang_bridge from '../assets/images/Yichang_Yangze_bridge.jpg';
import img_yichang_three_gorges from '../assets/images/Yichang_three_gorges_dam.jpeg';
import img_yichang_attractions from '../assets/images/Yichang_attractions_overview.jpg';

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

            <Carousel>
                <Carousel.Item>
                    <div style={{height: '40vh'}}>
                        <img
                            className="d-block w-100"
                            src={img_yichang_bridge}
                            alt="First slide"
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                        <Carousel.Caption>
                            <h3>Yichang</h3>
                            <p>known in ancient times as Yiling, is a lively, sprawling, <br/>
                                modern-day city on the banks of the Yangtze River in Hubei Province</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{height: '40vh'}}>
                        <img
                            className="d-block w-100"
                            src={img_yichang_three_gorges}
                            alt="Second slide"
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />

                        <Carousel.Caption>
                            <h3>World’s Hydropower Capital</h3>
                            <p>Yichang has abundant water resources and it is lauded as <strong>the largest
                                hydroelectric
                                base</strong> in the world,<br/>
                                indeed it is a bright pearl shining on the Yangtze River.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div style={{height: '40vh'}}>
                        <img
                            className="d-block w-100"
                            src={img_yichang_attractions}
                            alt="Third slide"
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                        <Carousel.Caption>
                            <h3>Tourist Destination</h3>
                            <p> The abundant natural resources and historical sites of the
                                city are also attractive.<br/> Mountains, waterfalls, caves, stone forests and pools
                                form picturesque scenes.</p>

                        </Carousel.Caption>
                    </div>

                </Carousel.Item>
            </Carousel>

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

