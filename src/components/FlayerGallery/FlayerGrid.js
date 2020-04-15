import React from "react";
import Flayer from "../FlayerCard";
import "./style.scss";

function FlayerGrid({ openLightbox, images }) {
  return (
    <div className="gallery" id="gallery">
      {images.map((flayer) => (
        <Flayer
          openLightbox={openLightbox}
          {...flayer}
        />
      ))}
    </div>
  );
}

export default FlayerGrid;
