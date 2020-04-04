import React, { useState } from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { MdFavorite, MdShare, MdFavoriteBorder } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import "./style.css";

function Flyer({ image, openLightbox, index }) {

  const [like, setLike] = useState(false);
  const likeHandle = () => setLike(!like);

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
            {/* TODO Optimize conditional */}
            {!like ? 
              <MdFavoriteBorder className="like-button" size={iconSize} color="DimGrey" onClick={likeHandle}/>
              : <MdFavorite className="like-button" size={iconSize} color="Crimson" onClick={likeHandle}/>
            }
            <MdShare className="button" size={iconSize} color="Orange" />
            <OverlayTrigger trigger="hover" placement="bottom" overlay={popover} delay={{ show:400, hide: 200 }}>
              <GoCommentDiscussion className="disabled-button" size={iconSize} color="LightGray"/>
            </OverlayTrigger>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Flyer;
