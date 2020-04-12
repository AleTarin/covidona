import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useFlyerModal = (flyers, FID) => {
  let history = useHistory();
  const [currentFlyer, setCurrentImage] = useState(-1);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(
    (_) => {
      const index = findFlyerIndex(FID);
      openModal(index);
    },
    [FID]
  );

  const openLightbox = (FID) => {
    history.push(`/${FID}`);
  };

  const closeLightbox = useCallback(() => {
    history.push(`/`);
  });

  const findFlyerIndex = (FID) =>
    flyers ? flyers.findIndex((flyer) => flyer.FID === FID) : -1;

  const openModal = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(index >= 0);
  }, []);

  return {
    closeLightbox,
    openLightbox,
    currentFlyer,
    viewerIsOpen,
  };
};

export default useFlyerModal;
