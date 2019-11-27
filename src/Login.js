import React, { useState } from 'react';
import {
  Form, Button, Container, Col, Row, ButtonToolbar,
  ToggleButtonGroup, ToggleButton, Alert
} from 'react-bootstrap';
import firebase from 'firebase';

const Login = () => {
  const [info, setInfo] = useState({
    registration: false, email: "", password: "", error: false
  });

  const handleChange = e =>
    setInfo({
      ...info, [e.target.name]: e.target.value
    })

  const handleButtonGroupChange = val => setInfo({ ...info, registration: val });

  const authenticate = () => {
    if (info.registration) {
      firebase.auth().createUserWithEmailAndPassword(info.email, info.password).catch(error => {
        setInfo({ ...info, error: true })
      });
    }
    else {
      firebase.auth().signInWithEmailAndPassword(info.email, info.password).catch(error => {
        setInfo({ ...info, error: true })
      });
    }
  }

  return (<div>
    {info.error ? <Alert variant="danger">There was an authentication issue, please make sure that
        all of your information is correct!</Alert> : <div></div>}
    <br />
    <br />
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <Container fluid>
              <Row>
                <Col></Col>
                <Col xs={5}>
                  <ButtonToolbar>
                    <ToggleButtonGroup onChange={handleButtonGroupChange} name="registration" defaultValue={[info.registration]}>
                      <ToggleButton value={true}>Register</ToggleButton>
                      <ToggleButton value={false}>Log In</ToggleButton>
                    </ToggleButtonGroup>
                  </ButtonToolbar>
                </Col>
                <Col></Col>
              </Row>
            </Container>
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" onClick={authenticate}>
              {info.registration ? "Register" : "Log In"}
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>)
}

export default Login;