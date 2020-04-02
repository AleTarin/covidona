import React from "react";
import { Card } from "react-bootstrap";
import './style.css'

function Flyer({ image, openLightbox, index }) {
    return (
        <Card className="pics animation">
            <Card.Img 
                variant="top" 
                src={image}
                onClick={openLightbox.bind(image, index)}
                className="img-fluid"
                alt="Card cap"
                >
            </Card.Img>
            <Card.Body className="body">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
} 

export default Flyer
