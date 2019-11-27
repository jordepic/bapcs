import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAF8CcEtLqiWaBx4LjkfCgmHdIDG2dR8KU",
  authDomain: "bapcs-1d179.firebaseapp.com",
  databaseURL: "https://bapcs-1d179.firebaseio.com",
  projectId: "bapcs-1d179",
  storageBucket: "bapcs-1d179.appspot.com",
  messagingSenderId: "978315474439",
  appId: "1:978315474439:web:d6711de1e41c4809195ca2",
  measurementId: "G-YRVTSPS76G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
