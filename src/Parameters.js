import React, { useState } from 'react';
import { Form, Input, Container, Row, Col, Button } from 'react-bootstrap';
import firebase from 'firebase';

const Parameters = (props) => {
  const [params, setParams] = useState({
    "email": "",
    "Case": false,
    "CPU Cooler": false,
    "HDD": false,
    "Headphones": false,
    "SSD": false,
    "Fan": false,
    "PSU": false,
    "Prebuilt/Computer/PC": false,
    "Webcam": false,
    "Controller": false,
    "Laptop": false,
    "Monitor": false,
    "Other": false,
    "VR": false,
    "RAM": false,
    "Headset": false,
    "Optical Drive": false,
    "CPU": false,
    "OS": false,
    "Motherboard/MOBO": false,
    "Speakers": false,
    "Keyboard": false,
    "Networking": false,
    "Furniture": false,
    "GPU": false,
    "Mouse": false,
    "Bundle": false,
    "Mic": false,
    "Meta": false
  })

  const handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setParams({
      ...params, [name]: value
    });
  }

  return (<div>
    <br />
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <h3>Set your notification parameters!</h3>
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email where you want notifications sent</Form.Label>
              <Form.Control type="email" name="email"
                placeholder="Enter email" name="email" value={params.email} onChange={handleChange} />
            </Form.Group>
            <h6>What type of notifications do you want?</h6>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Case" name="Case" checked={params.Case} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="CPU Cooler" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="HDD" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Headphones" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="SSD" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Fan" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="PSU" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Prebuilt/Computer/PC" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Webcam" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Controller" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Laptop" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Monitor" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Other" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="VR" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="RAM" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Headset" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Optical Drive" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="CPU/Processor" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="OS" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Motherboard/MOBO" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Speakers" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keyboard" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Networking" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Furniture" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="GPU" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Mouse" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Bundle" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Mic" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Meta" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Set my notifications!
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>)
}

export default Parameters;
