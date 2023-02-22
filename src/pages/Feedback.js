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

    const regions = [
        'us-east-1',
        'us-east-2',
        'us-west-1',
        'us-west-2',
        'ca-central-1',
        'eu-central-1',
        'eu-north-1',
        'eu-west-1',
        'eu-west-2',
        'eu-west-3',
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setErrorMsg('Please enter a valid email address.');
            return;
        }

        let sent = false;
        let error = null;
        for (let i = 0; i < regions.length && !sent; i++) {
            const region = regions[i];
            try {
                AWS.config.update({
                    accessKeyId: awsConfig.accessKeyId,
                    secretAccessKey: awsConfig.secretAccessKey,
                    region
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
                await sendPromise;
                sent = true;
            } catch (err) {
                console.error(err);
                error = err;
            }
        }

        if (sent) {
            setSubmitted(true);
        } else {
            setErrorMsg('There was an error submitting your feedback. Please try again later.');
            console.error(error);
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
            <p>We're constantly working to improve our website and provide the best possible experience for our users.
                We value your feedback and would love to hear from you. Whether you have suggestions for new features,
                ideas for improving the site, or just want to share your thoughts!</p>

            <p>Please take a moment to fill out the feedback form below and let us know what you think. We appreciate
                your time and input and will use it to make our website even better. Thank you!</p>
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
