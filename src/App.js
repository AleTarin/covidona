import React, { Component } from 'react';
import logo from './logo.svg';
import {Alert} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This project is developed by Front-End-Pistols.</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert variant='dark'>
          Powered by Roro
        </Alert>
      </div>
    );
  }
}

export default App;
