import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';

import {Container, Carousel} from 'react-bootstrap';
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
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9vdHp4eSIsImEiOiJjbDBxZXF1aXEyOWE1M29sNHRodDRtd3U3In0.8ECuEZlnZLBTOfx0D_szXQ';
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
        <div>
            <Header/>

            <Carousel>
                <Carousel.Item>
                    <div style={{height: '50vh'}}>
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
                    <div style={{height: '50vh'}}>
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
                    <div style={{height: '50vh'}}>
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

            <Container className="d-flex flex-column align-items-center justify-content-start">
                <div className="intro my-4 mx-3">
                    <h2>Welcome to Yichang</h2>
                    <p>Yichang city is located in the southwest of Hubei Province and lies on the northern bank of
                        the <strong>Yangtze River</strong>. It borders Jingzhou and Jingmen to the east, Hunan Province
                        to the south, Enshi to the west and Shennongjia Nature Reserve and Xiangyang to the north.</p>
                    <p>Yichang is the location of the Gezhouba Water Conservancy Project and Three Gorges Dam Project,
                        so it is known as the <strong>world’s hydropower capital</strong>. Every year, a large number of
                        tourists come to visit this great water conservancy miracle. </p>
                </div>

                <div className="map-container">
                    <div ref={mapContainer}/>
                </div>

                <div className="intro-neighborhood my-3 mx-3">
                    <h3>Discover the Neighborhoods of Yichang</h3>
                    <p>Discover the hidden gems of Yichang's neighborhoods, each with its own unique charm and
                        character. From the bustling shopping district of Wujiagang, to the historic Hanchuan Old Town,
                        there's something for everyone to explore. Take a stroll down the scenic Changbanpo Greenway, or
                        visit the ancient temple at Xiling Gorge. With so much to see and do, you won't want to miss a
                        single neighborhood. Click the 'Learn more' button to start your adventure!</p>
                    <a href="/neighborhood" className="btn btn-primary">Learn more</a>
                </div>
                <div className="intro-events my-3 mx-3">
                    <h3>Join Exciting Events in Yichang</h3>
                    <p>Discover the rich cultural heritage of Yichang by participating in local events. From the annual
                        Dragon Boat
                        Festival to the Yichang International Yangtze River Marathon, there's something for everyone to
                        enjoy. Join the
                        celebrations and experience the warmth of the city. Click the 'Learn more' button to see the
                        full list of events.</p>
                    <a href="/events" className="btn btn-primary">Learn more</a>
                </div>
                <div className="intro-gallery my-3 mx-3">
                    <h3>Explore the Best of Yichang</h3>
                    <p>Take a visual tour of the breathtaking landscapes, historic landmarks and vibrant culture of
                        Yichang. Our
                        curated gallery features the top 10 attractions of the city, capturing the essence of Yichang's
                        beauty and charm.
                        Click on an image to learn more and start planning your itinerary. Click the 'See more' button
                        to view the full
                        gallery.</p>
                    <a href="/gallery" className="btn btn-primary">See more</a>
                </div>

            </Container>
            <Footer/>
        </div>
    );
}

export default Home;

