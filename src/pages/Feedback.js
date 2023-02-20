import React, {useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AWS from 'aws-sdk';
import awsConfig from '../assets/data/config';

function Feedback() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setErrorMsg('Please enter a valid email address.');
            return;
        }
        // Send email using AWS SES
        AWS.config.update({
            accessKeyId: awsConfig.accessKeyId,
            secretAccessKey: awsConfig.secretAccessKey,
            region: 'eu-west-1'
        });

        const params = {
            Destination: {
                ToAddresses: [email]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: `<p>Thank you for your feedback!</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Feedback: ${feedback}</p>`
                    },
                    Text: {
                        Charset: 'UTF-8',
                        Data: `Thank you for your feedback!\nName: ${name}\nEmail: ${email}\nFeedback: ${feedback}`
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Feedback Received'
                }
            },
            Source: 'zxyzhouxiangyi@gmail.com'
        };

        const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

        try {
            await sendPromise;
            setSubmitted(true);
        } catch (error) {
            console.error(error);
            setErrorMsg('There was an error submitting your feedback. Please try again later.');
        }
    };

    const validateEmail = (email) => {
        // regex to match email addresses
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <Container>
            <Header/>
            <h1>Feedback</h1>
            {submitted ? (
                <p>Thank you for your feedback!</p>
            ) : (
                <div>
                    {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={name}
                                          onChange={(event) => setName(event.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" value={email}
                                          onChange={(event) => setEmail(event.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="feedback">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your feedback" value={feedback}
                                          onChange={(event) => setFeedback(event.target.value)}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
            <Footer/>
        </Container>
    );
}

export default Feedback;
