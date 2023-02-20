import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <Container>
      <Header />
      <h1>About Us</h1>
      <Card>
        <Card.Body>
          <Card.Title>Who I am</Card.Title>
          <Card.Text>
            I am a computer science student who is passionate about web development and traveling.
            This website was created as a way to demonstrate my web development skills and provide a platform for
            others to explore the beauty of Yichang city.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Copyright Notice</Card.Title>
          <Card.Text>
            Some of the images and text used on this website have been sourced from other commercial websites.
            I have used this content purely for educational and non-commercial purposes. If any copyright owner
            wishes for their content to be removed, please contact me at zxyzhouxiangyi@gmail.com and I
            will promptly take action to remove the content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Card.Text>
            If you have any questions or comments about our website, or if you would like to inquire about collaborating
            with us, please feel free to contact us at zxyzhouxiangyi@gmail.com.
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
}

export default About;
