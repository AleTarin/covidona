import PropTypes from "prop-types";
import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "../style.scss";

function LikeButton({ iconSize }) {
  
  const [click, setClick] = useState(false);
  const clickHandle = () => setClick(!click);

  return (
    <span>
      {/* TODO Optimize conditionals */}
      {!click ? 
        <MdFavoriteBorder className="like-button" size={iconSize} color="DimGrey" onClick={clickHandle} />
        : <MdFavorite className="like-button" size={iconSize} color="Crimson" onClick={clickHandle} />
      }
    </span>
  );
}

LikeButton.propTypes = {
  iconSize: PropTypes.number
}

export default LikeButton;
