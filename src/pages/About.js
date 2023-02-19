import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h1>About DiscoverCity</h1>
        <p className="lead">DiscoverCity is a website that helps visitors explore the unique features and attractions of our beautiful city.</p>
        <p>We believe that the best way to experience a city is to get off the beaten path and explore the hidden gems that make it special. That's why we've created guides for each neighborhood in the city, highlighting the best local restaurants, shops, and other points of interest.</p>
        <p>In addition to our neighborhood guides, we also offer an event calendar that highlights upcoming events and festivals in the city, a photo gallery that showcases the beauty and uniqueness of the city, and a feedback system that allows visitors to rate and review different attractions and points of interest.</p>
        <p>Thank you for visiting DiscoverCity, and we hope you enjoy your stay in our beautiful city!</p>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
