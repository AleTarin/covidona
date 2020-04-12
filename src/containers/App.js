import React from "react";
import covidona from "../media/images/covidona.png";
import { Navbar } from "react-bootstrap";
import FlyerGallery from "../components/FlyerGallery";
import { FlyerProvider } from "./FlyerProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:FID?">
          <AppContainer></AppContainer>
        </Route>
      </Switch>
    </Router>
  );
}

const AppContainer = (props) => {
  return (
    <div className="App">
      <Header />
      <Division />
      <Flyers />
      <Division />
      <Footer />
    </div>
  );
};

const Flyers = (_props) => {
  return (
    <section className="App-intro">
      <FlyerProvider>
        <FlyerGallery />
      </FlyerProvider>
    </section>
  );
};

const Header = (_props) => (
  <>
    <div className="App-header" />
    <img src={covidona} className="img-fluid" alt="logo" />
  </>
);
const Division = (_props) => <div className="h2">...</div>;

const Footer = (_props) => (
  <Navbar bg="light" fixed="bottom">
    <Navbar.Brand href="#home">
      Developed by Front-End-Pistols. Powered by Roro
    </Navbar.Brand>
  </Navbar>
);
export default App;
