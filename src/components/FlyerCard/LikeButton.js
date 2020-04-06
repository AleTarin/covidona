import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./style.scss";

function LikeButton({ iconSize }) {
  
  const [like, setLike] = useState(false);
  const likeHandle = () => setLike(!like);

  return (
    <span>
      {/* TODO Optimize conditionals */}
      {!like ? 
        <MdFavoriteBorder className="like-button" size={iconSize} color="DimGrey" onClick={likeHandle} />
        : <MdFavorite className="like-button" size={iconSize} color="Crimson" onClick={likeHandle} />
      }
    </span>
  );
}

export default LikeButton;
