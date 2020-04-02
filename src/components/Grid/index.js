import React from 'react';
import { Row } from 'react-bootstrap';


const Grid = props => {
    return (
        <section className="container flex-column flex-wrap align-items-start justify-content-start" style={{
            height: '100vh'
        }}>
        <img style={{
            maxWidth: '25%'
        }} src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg" className="img-fluid mb-4" alt=""/>
        <img 
        style={{
            maxWidth: '25%'
        }}
        src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(66).jpg" className="img-fluid mb-4" alt=""/>            
        </section>
    )
}

export default Grid;