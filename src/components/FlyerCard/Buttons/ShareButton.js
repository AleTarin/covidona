import React, { useState, useCallback } from "react";
import { MdShare } from "react-icons/md";
import { Popover, OverlayTrigger } from "react-bootstrap";
import labelData from "../../../labels.json";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../style.scss";

const LABELS = labelData.LABELS;

function ShareButton({ imgURL, iconSize }) {
  const [copyURL, setCopyURL] = useState(false);
  const copyHandle = () => setCopyURL(!copyURL);

  const initialState = useCallback(() => {
    setCopyURL(false);
  }, []);

  const shareList = (
    <Popover id="popover-contained">
      {/* TODO Simplify with a function */}
      <Popover.Content className="share-buttons">
        <WhatsappShareButton title="Flyer title" url={imgURL}>
          <WhatsappIcon borderRadius="10" size="40" />
        </WhatsappShareButton>
        <FacebookShareButton title="Flyer title" url={imgURL}>
          <FacebookIcon borderRadius="10" size="40" />
        </FacebookShareButton>
        <TwitterShareButton title="Flyer title" url={imgURL}>
          <TwitterIcon borderRadius="10" size="40" />
        </TwitterShareButton>
        <EmailShareButton title="Flyer title" url={imgURL}>
          <EmailIcon borderRadius="10" size="40" />
        </EmailShareButton>
      </Popover.Content>
      {/* TODO simplify with a function */}
      {!copyURL ? (
        <CopyToClipboard text={imgURL} onCopy={copyHandle}>
          <Popover.Content className="copy-link">
            {LABELS.BUTTONS.SHARE.COPY}
          </Popover.Content>
        </CopyToClipboard>
      ) : (
        <Popover.Content className="copied-link">
          {LABELS.RESPONSE.SHARE.COPY}
        </Popover.Content>
      )}
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={shareList}
      onExited={initialState}
      rootClose
    >
      <MdShare className="button" size={iconSize} color="Orange" />
    </OverlayTrigger>
  );
}

export default ShareButton;
