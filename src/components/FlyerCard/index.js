import React from "react";
import { Card } from "react-bootstrap";
import { MdFavorite, 
        MdComment,
        MdShare } from "react-icons/md";
import './style.css'

function Flyer({ image, openLightbox, index }) {
    const iconSize = '1.3em'
    return (
        <Card>
            <Card.Img 
                variant="top" 
                src={image}
                onClick={openLightbox.bind(image, index)}
                className="img-fluid"
                alt={`Flyer #${index}`}
                >
            </Card.Img>
            <Card.Body>
                <Card.Title>Flyer Title</Card.Title>
                <Card.Text>Flyer location</Card.Text>
                <div className="card-buttons">
                    {/* TODO Add hooks for click-handlers */}
                    <MdFavorite size={iconSize} color="DarkGray"/>
                    <MdShare size={iconSize} color="Orange"/>
                    <MdComment size={iconSize} color="DimGray"/>
                </div>
            </Card.Body>
            <Card.ImgOverlay />
        </Card>
    )
} 

export default Flyer
