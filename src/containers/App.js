import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Header from '../components/Header'
import FlayerGallery from "../components/FlayerGallery";
import { FlayerProvider } from "./FlayerProvider";
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
        <Flayers />
        <Footer />
    </div>
  );
};

const Flayers = (_props) => {
  return (
    <section className="App-intro">
      <FlayerProvider>
        <FlayerGallery />
      </FlayerProvider>
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
      <Navbar.Brand className="footer">
        {LABELS.NAVBAR.FOOTER}
      </Navbar.Brand>
  </Navbar>
);
export default App;
