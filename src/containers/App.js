import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Header from '../components/Header'
import FlyerGallery from "../components/FlyerGallery";
import { FlyerProvider } from "./FlyerProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import labelData from "../labels.json";
import "../sass/App.scss";
const LABELS = labelData.LABELS;

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
        <Description />
        <Flyers />
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

const Description = (_props) => (
  <div className="description">
    <Container>{LABELS.HOMEPAGE.DESCRIPTION}</Container>
  </div>
);

const Footer = (_props) => (
  <Navbar bg="light">
    <Container>
      <Navbar.Brand className="footer">
        {LABELS.NAVBAR.FOOTER}
      </Navbar.Brand>
    </Container>
  </Navbar>
);
export default App;
