import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Container } from "react-bootstrap";
import './style.css'

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
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",
]

function GalleryGrid() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Container fluid>
            <ImageGrid openLightbox={openLightbox} images={images}></ImageGrid>
            <ImageModal currentImage={currentImage} viewerIsOpen={viewerIsOpen} closeLightbox={closeLightbox}></ImageModal>
        </Container>
    );
}

const ImageGrid = ({openLightbox, images}) => (
    <div class="gallery" id="gallery">
        {images.map((image, index) => (
            <div class="pics animation all" >
                <img
                    onClick={openLightbox.bind(image, index)}
                    class="img-fluid"
                    src={image}
                    alt="Card  cap"
                />
            </div>
        ))}
    </div>
)

const ImageModal = (props) => (
    <ModalGateway>
        {props.viewerIsOpen ? <Modal onClose={props.closeLightbox}>
            <Carousel currentIndex={props.currentImage} views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
            }))} />
        </Modal> : null}
    </ModalGateway>
);


export default GalleryGrid;