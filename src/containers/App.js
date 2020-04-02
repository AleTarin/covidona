import React from 'react';
import covidona from '../media/images/covidona.png';
import {Navbar} from 'react-bootstrap'
import Gallery from '../components/Gallery'
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="App-header"/>
      <img src={covidona} class="img-fluid" alt="logo" />
      <p className="App-intro">
        <h2>...</h2>
      </p>
      <Navbar bg="light" fixed="bottom">
        <Navbar.Brand href="#home">Developed by Front-End-Pistols. Powered by Roro</Navbar.Brand>
      </Navbar>
      <Gallery />
    </div>
  );
}

export default App;
