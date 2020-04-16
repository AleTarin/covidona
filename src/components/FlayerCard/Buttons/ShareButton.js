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

function ShareButton({ iconSize, ...flayer }) {

  const [copyURL, setCopyURL] = useState(false);
  const copyHandle = () => setCopyURL(!copyURL);

  const initialState = useCallback(() => {
    setCopyURL(false);
  }, []);

  const shareList = (
    <Popover id="popover-contained">
        {/* TODO Simplify with a function */}
        <Popover.Content className="share-buttons">
        <WhatsappShareButton 
          title={`${flayer.title} de ${flayer.location}`} 
          url={`\n${LABELS.HOMEPAGE.HOMELOCATION}\nFlayer: ${flayer.src}`}
          >
            <WhatsappIcon borderRadius="10" size="40" />
        </WhatsappShareButton>
        <FacebookShareButton 
          quote={`${flayer.title} de ${flayer.location}${LABELS.BUTTONS.SHARE.FACEBOOK.QUOTE}\n${LABELS.HOMEPAGE.HOMELOCATION}\n\nFlayer: `} 
          url={`${flayer.src}`}
          >
            <FacebookIcon borderRadius="10" size="40" />
        </FacebookShareButton>
        <TwitterShareButton 
          title={`De ${LABELS.HOMEPAGE.HOMELOCATION} ${flayer.title} de ${flayer.location}. Flayer:  `} 
          url={`${flayer.src}`}
          >
            <TwitterIcon borderRadius="10" size="40" />
        </TwitterShareButton>
        <EmailShareButton 
          subject={LABELS.BUTTONS.SHARE.EMAIL.SUBJECT} 
          body={`${LABELS.BUTTONS.SHARE.EMAIL.BODY1}${LABELS.HOMEPAGE.HOMELOCATION}\n${flayer.title} de ${flayer.location}\n`} 
          url={`Flayer:\n${flayer.src} ${LABELS.BUTTONS.SHARE.EMAIL.BODY2}`}
          separator=" " 
          >
            <EmailIcon borderRadius="10" size="40" />
        </EmailShareButton>
        </Popover.Content>
        {/* TODO simplify with a function */}
        {!copyURL ? (
        <CopyToClipboard text={`${LABELS.HOMEPAGE.HOMELOCATION}/${flayer.FID}`} onCopy={copyHandle}>
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
