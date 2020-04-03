import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./style.css";

function ImageModal(props) {
  return (
    <ModalGateway>
      {props.viewerIsOpen ? (
        <Modal onClose={props.closeLightbox}>
          <Carousel
            currentIndex={props.currentImage}
            views={props.images.map(x => ({
              src: x
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  );
}

export default ImageModal;
