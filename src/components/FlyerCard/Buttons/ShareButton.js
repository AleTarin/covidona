import React from "react";
import { MdShare } from "react-icons/md";
import { Popover, OverlayTrigger } from "react-bootstrap";
import labelData from '../../../labels.json';
import "../style.scss";

// TODO Add Context for labels
const labels = labelData.BOTONS

function ShareButton ({ iconSize }){
    
    const shareList = (
        <Popover id="popover-contained" className="share-list">
            {/* TODO Simplify with a function */}
            <Popover.Content className="whatsapp">
                {labels.SHARE.WHATSAPP}
            </Popover.Content>
            <Popover.Content className="facebook">
                {labels.SHARE.FACEBOOK}
            </Popover.Content>
            <Popover.Content className="twitter">
                {labels.SHARE.TWITTER}
            </Popover.Content>
            <Popover.Content className="email">
                {labels.SHARE.EMAIL}
            </Popover.Content>
            <Popover.Content className="copiarLink">
                {labels.SHARE.COPY}
            </Popover.Content>
        </Popover>
      );
      
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={shareList} >
            <MdShare className="button" size={iconSize} color="Orange" />
        </OverlayTrigger>
    )
}

export default ShareButton;
