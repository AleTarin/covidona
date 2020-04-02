import React, { useState, useCallback } from "react";
import ImageGrid from "./ImageGrid"
import ImageModal from "./ImageModal"
import { Container } from "react-bootstrap";
import './style.css'

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
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",
]

function GalleryGrid() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Container fluid>
            <ImageGrid openLightbox={openLightbox} 
                images={images} />
            <ImageModal images={images} 
                currentImage={currentImage} 
                viewerIsOpen={viewerIsOpen} 
                closeLightbox={closeLightbox} />
        </Container>
    );
}

export default GalleryGrid;
