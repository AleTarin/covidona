import React, { useState } from "react";
import { Navbar, Form, Container, Button } from "react-bootstrap";
import labelData from "../../labels.json";
import "../../sass/App.scss";
const LABELS = labelData.LABELS;

function Header () {
  
    const [contact, setContact] = useState(false);
    const getContact = () => {
      setContact(!contact)
      setTimeout(() => {setContact(false)}, 1000);
    }
    
    return (
        <Navbar bg="dark" sticky="top" variant="dark" className="navbar-title">
        <Container>
          <Navbar.Brand href="/">
            <span>{LABELS.NAVBAR.COVIDONA}</span>
          </Navbar.Brand>
          <Form inline>
            <Button 
                href={mailto(contact)} 
                onClick={getContact} 
                variant="light" 
                >
              {LABELS.NAVBAR.SUBMIT.BUTTON}
            </Button>
          </Form>
        </Container>
      </Navbar>
    );
}

const mailto = (contact) => {
    const email = `${LABELS.NAVBAR.SUBMIT.CONTACT}?subject=${LABELS.NAVBAR.SUBMIT.SUBJECT}&body=${LABELS.NAVBAR.SUBMIT.BODY}`
    return (
    `mailto:${!contact ? '#' 
    : email}`
    );
}

export default Header;
