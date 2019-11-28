import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parameters from "./Parameters";
import firebase from 'firebase';
import Login from './Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [UID, setUID] = useState("");

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUID(user.uid);
      setLoggedIn(true);
    } else {
      setUID("");
      setLoggedIn(false);
    }
  });

  const signOut = () =>
    firebase.auth().signOut().then(() => {

    }).catch(error => {

    });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>PC Sales Alerts</Navbar.Brand>
        {loggedIn ? (<Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link onClick={signOut}> Logout</Nav.Link>
          </Nav.Item></Nav>) : <div></div>}
      </Navbar>
      {
        loggedIn ? (<Parameters uid={UID} />) : (<Login />)
      }
    </div >
  );
}

export default App;
