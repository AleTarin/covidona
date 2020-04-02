import React, { Component } from 'react';
import covidona from '../public/media/images/covidona.png';
import {Navbar} from 'react-bootstrap'
import Gallery from './components/Gallery'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"/>
        <p className="App-intro">
        <img src={covidona} className="App-logo" alt="logo" />
        <h2>This project is developed by Front-End-Pistols.</h2>
        </p>
        <Navbar bg="light" fixed="bottom">
          <Navbar.Brand href="#home">Powered by Roro</Navbar.Brand>
        </Navbar>
        <Gallery></Gallery>
      </div>
    );
  }
}

export default App;
