import React, { useContext } from "react";
import FlyerGrid from "./FlyerGrid";
import FlyerModal from "./FlyerModal";
import { Container } from "react-bootstrap";
import useFlyerModal from "../../hooks/useFlyerModal";
import FlyerContext from "../../containers/FlyerProvider";

import "./style.scss";
const FlyerGallery = (_props) => {
  const { flyers, FID } = useContext(FlyerContext);
  const {
    closeLightbox,
    openLightbox,
    currentFlyer,
    viewerIsOpen,
  } = useFlyerModal(flyers, FID);
  return (
    <Container fluid="lg">
      <FlyerGrid openLightbox={openLightbox} images={flyers} />
      <FlyerModal
        images={flyers}
        currentImage={currentFlyer}
        viewerIsOpen={viewerIsOpen}
        closeLightbox={closeLightbox}
      />
    </Container>
  );
};

export default FlyerGallery;
