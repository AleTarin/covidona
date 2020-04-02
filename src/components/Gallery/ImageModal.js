import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import './style.css'

function ImageModal(props){
    return(
        <ModalGateway>
            {props.viewerIsOpen ? <Modal onClose={props.closeLightbox}>
                <Carousel currentIndex={props.currentImage} 
                    views={props.images.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    })
                )}
                />
            </Modal> : null}
        </ModalGateway>
    )
}

export default ImageModal
