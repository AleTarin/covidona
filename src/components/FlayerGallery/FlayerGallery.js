import React, { useContext } from "react";
import FlayerGrid from "./FlayerGrid";
import FlayerModal from "./FlayerModal";
import { Container } from "react-bootstrap";
import useFlayerModal from "../../hooks/useFlayerModal";
import FlayerContext from "../../containers/FlayerProvider";

import "./style.scss";
const FlayerGallery = (_props) => {
  const { flayers, FID } = useContext(FlayerContext);
  const {
    closeLightbox,
    openLightbox,
    currentFlayer,
    viewerIsOpen,
  } = useFlayerModal(flayers, FID);
  return (
    <Container fluid="lg">
      <FlayerGrid openLightbox={openLightbox} images={flayers} />
      <FlayerModal
        images={flayers}
        currentImage={currentFlayer}
        viewerIsOpen={viewerIsOpen}
        closeLightbox={closeLightbox}
      />
    </Container>
  );
};

export default FlayerGallery;
