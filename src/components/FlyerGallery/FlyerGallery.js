import React, { useState, useCallback } from "react";
import ImageGrid from "./FlyerGrid";
import ImageModal from "./FlyerModal";
import { Container } from "react-bootstrap";
import FlyerContext from '../../containers/FlyerProvider'
import "./style.css";

// TODO Send to DB and call from containers
const images = [
  "https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg",
  "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg",
  "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",
  "https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg",
  "https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg",
  "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",
  "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg",
  "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",
  "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg",
  "https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg",
  "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
];

function GalleryGrid() {
  const flyers = React.useContext(FlyerContext);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event, index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container fluid="lg">
      {JSON.stringify(flyers)}
      <ImageGrid openLightbox={openLightbox} images={images} />
      <ImageModal
        images={images}
        currentImage={currentImage}
        viewerIsOpen={viewerIsOpen}
        closeLightbox={closeLightbox}
      />
    </Container>
  );
}

export default GalleryGrid;
