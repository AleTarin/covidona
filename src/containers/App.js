import React from "react";
import covidona from "../media/images/covidona.png";
import { Navbar } from "react-bootstrap";
import Gallery from "../components/Gallery";
import "../sass/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="App-header" />
      <img src={covidona} className="img-fluid" alt="logo" />
      <section className="App-intro">
        <div className="h2">...</div>
        <Gallery />
      </section>
      <div className="footer h2">...</div>
      <Navbar bg="light" fixed="bottom">
        <Navbar.Brand href="#home">
          Developed by Front-End-Pistols. Powered by Roro
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
