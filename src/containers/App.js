import React from "react";
import covidona from "../media/images/covidona.png";
import { Navbar } from "react-bootstrap";
import FlyerGallery from "../components/FlyerGallery";
import {FlyerProvider} from './FlyerProvider';


function App() {
  return (
      <div className="App">
        <div className="App-header" />
        <img src={covidona} className="img-fluid" alt="logo" />
        <div className="h2">...</div>
        <section className="App-intro">
          <FlyerProvider>
            <FlyerGallery/>
          </FlyerProvider>
        </section>
        <div className="h2">...</div>
        <Navbar bg="light" fixed="bottom">
          <Navbar.Brand href="#home">
            Developed by Front-End-Pistols. Powered by Roro
          </Navbar.Brand>
        </Navbar>
      </div>
  );
}

export default App;
