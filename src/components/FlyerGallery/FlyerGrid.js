import React from "react";
import Flyer from "../FlyerCard";
import "./style.scss";

function FlyerGrid({ openLightbox, images }) {
  return (
    <div className="gallery" id="gallery">
      {images.map((flyer) => (
        <Flyer
          openLightbox={openLightbox}
          {...flyer}
        />
      ))}
    </div>
  );
}

export default FlyerGrid;
