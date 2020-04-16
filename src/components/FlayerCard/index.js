import React from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { GoCommentDiscussion } from "react-icons/go";
import LikeButton from "./Buttons/LikeButton";
import ShareButton from "./Buttons/ShareButton";
import "./style.scss";

function Flayer({ ...flayer }) {
  const iconSize = "1.3em";
  return (
    <div className="card-container" key={flayer.FID}>
      <Card>
        <Card.Img
          variant="top"
          src={flayer.src}
          className="img-fluid"
          alt={`Flayer #${flayer.FID}`}
          onClick={(e) => flayer.openLightbox(flayer.FID)}
        />
        <Card.Body>
          <Card.Title onClick={(e) => flayer.openLightbox(flayer.FID)}>{flayer.title}</Card.Title>
          <Card.Text>{flayer.location}</Card.Text>
          <div className="card-buttons">
            <LikeButton size={iconSize} />
            <ShareButton size={iconSize} {...flayer}/>
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
