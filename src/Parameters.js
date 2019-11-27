import React, { useState } from 'react';
import { Form, Input, Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import firebase from 'firebase';

const possibilities = ["Case", "CPU Cooler", "HDD", "Headphones", "SSD", "Fan", "PSU", "Prebuilt/Computer/PC",
  "Webcam", "Controller", "Laptop", "Monitor", "Other", "VR", "RAM", "Headset", "Optical Drive", "CPU", "OS",
  "Motherboard/MOBO", "Speakers", "Keyboard", "Networking", "Furniture", "GPU", "Mouse", "Bundle", "Mic", "Meta"]

const initState = {}

possibilities.map(part => {
  initState[part] = { hasNotifications: false, maximumValue: 0 }
})

const Parameters = (props) => {

  const [params, setParams] = useState({ ...initState, email: "" });

  const handleEmailChange = event => {
    setParams({
      ...params, [event.target.name]: event.target.value
    });
  }

  const handleParameterChange = event => {
    let innerObj = params[event.target.name];
    event.target.type === "checkbox" ?
      innerObj.hasNotifications = event.target.checked :
      innerObj.maximumValue = event.target.value;
    setParams({
      ...params, [event.target.name]: innerObj
    });
  }

  const db = firebase.firestore();

  const dataUpload = () => db.collection("users").doc(props.uid).set(
    params
  )
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });

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
                placeholder="Enter email" name="email" value={params.email} onChange={handleEmailChange} />
            </Form.Group>
            <h6>Check the box for notifications on this type of part, and choose a maximum price under which you want
              to see notifications!
            </h6>
            {possibilities.map(name => (<InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox onChange={handleParameterChange} name={name} value={params[name].hasNotifications} />
              </InputGroup.Prepend>
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl type="number" name={name} value={params[name].maximumValue} placeholder="Enter a number" onChange={handleParameterChange} />
              <InputGroup.Append>
                <InputGroup.Text>{name}</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>))}
            <Button variant="primary" onClick={dataUpload}>
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
