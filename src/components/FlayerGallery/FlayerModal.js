import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./style.scss";

function FlayerModal({ currentImage, closeLightbox, viewerIsOpen, images }) {
  return (
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={images}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  );
}

export default FlayerModal;
