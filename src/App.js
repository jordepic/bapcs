import React, { useState } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parameters from "./Parameters";
import firebase from 'firebase';
import Login from './Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(true);
    }
  });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>BAPCS Alerter</Navbar.Brand>
      </Navbar>
      {
        loggedIn ? (<Parameters />) : (<Login />)
      }
    </div>
  );
}

export default App;
