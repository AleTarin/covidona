import React from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { GoCommentDiscussion } from "react-icons/go";
import LikeButton from "./Buttons/LikeButton";
import ShareButton from "./Buttons/ShareButton";
import "./style.scss";

function Flyer({ image, openLightbox, index }) {
  
  const iconSize = "1.3em";

  const popover = (
    <Popover id="popover-basic" placement="bottom">
      <Popover.Content>En desarrollo <span role="img" aria-label="Bot">🤖</span></Popover.Content>
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
            <ShareButton size={iconSize} imgURL={image} />
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
