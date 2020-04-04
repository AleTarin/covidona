import React from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { MdShare } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import LikeButton from "./LikeButton";
import "./style.css";

function Flyer({ image, openLightbox, index }) {

  const iconSize = "1.3em";

  const popover = (
    <Popover id="popover-basic" placement="bottom">
      <Popover.Content>En desarrollo 🤖</Popover.Content>
    </Popover>
  );
  
  return (
    <div className="card-container">
      <Card>
        <Card.Img variant="top" src={image} className="img-fluid" alt={`Flyer #${index}`}
          onClick={e => openLightbox(e, index)}
        />
        <Card.Body>
          <Card.Title>Flyer Title</Card.Title>
          <Card.Text>Flyer location</Card.Text>
          <div className="card-buttons">
            <LikeButton size={iconSize} />
            <MdShare className="button" size={iconSize} color="Orange" />
            <OverlayTrigger placement="bottom" overlay={popover} delay={{ show:400, hide: 200 }}>
              <GoCommentDiscussion className="disabled-button" size={iconSize} color="LightGray"/>
            </OverlayTrigger>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Flyer;
