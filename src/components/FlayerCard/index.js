import React from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { GoCommentDiscussion } from "react-icons/go";
import LikeButton from "./Buttons/LikeButton";
import ShareButton from "./Buttons/ShareButton";
import "./style.scss";

function Flayer({ src, openLightbox, FID, title, location }) {
  const iconSize = "1.3em";
  return (
    <div className="card-container" key={FID}>
      <Card>
        <Card.Img
          variant="top"
          src={src}
          className="img-fluid"
          alt={`Flayer #${FID}`}
          onClick={(e) => openLightbox(FID)}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{location}</Card.Text>
          <div className="card-buttons">
            <LikeButton size={iconSize} />
            <ShareButton size={iconSize} imgURL={src} />
            <OverlayTrigger
              placement="bottom"
              overlay={popover}
              delay={{ show: 400, hide: 200 }}
            >
              <GoCommentDiscussion
                className="disabled-button"
                size={iconSize}
                color="LightGray"
              />
            </OverlayTrigger>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const popover = (
  <Popover id="popover-basic" placement="bottom">
    <Popover.Content>
      En desarrollo{" "}
      <span role="img" aria-label="Bot">
        🤖
      </span>
    </Popover.Content>
  </Popover>
);

export default Flayer;
