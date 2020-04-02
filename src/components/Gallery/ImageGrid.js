import React from "react";
import Flyer from "../FlyerCard"
import './style.css'

function ImageGrid ({openLightbox, images}){
    return(
        <div className="gallery" id="gallery">
            {images.map((image, index) => (
            <Flyer openLightbox={openLightbox} 
                image={image} 
                index={index} 
                />
            ))}
        </div>
    )
}

export default ImageGrid
