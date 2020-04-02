import React from "react";
import { Card } from "react-bootstrap";
import './style.css'

function Flyer({ image, openLightbox, index }) {
    return (
        <Card>
            <Card.Img 
                variant="top" 
                src={image}
                onClick={openLightbox.bind(image, index)}
                className="img-fluid"
                alt="Card cap"
                >
            </Card.Img>
            <Card.Body className="flyer-detail">
                <Card.Title>Flyer Title</Card.Title>
                <Card.Text>Flyer location</Card.Text>
            </Card.Body>
        </Card>
    )
} 

export default Flyer
