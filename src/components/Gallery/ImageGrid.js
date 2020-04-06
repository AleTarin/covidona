import React from "react";
import Flyer from "../FlyerCard";
import "./style.scss";

function ImageGrid({ openLightbox, images }) {
  return (
    <div className="gallery" id="gallery">
      {images.map((image, index) => (
        <Flyer key={index} openLightbox={openLightbox} image={image} index={index} />
      ))}
    </div>
  );
}

export default ImageGrid;
