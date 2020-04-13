import { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useFlyerModal = (flyers, FID) => {
  let history = useHistory();
  const [currentFlyer, setCurrentImage] = useState(-1);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  /* eslint-disable */
  useEffect(
    (_) => {
      const index = findFlyerIndex(FID);
      openModal(index);
    },
    [FID]
  );
  /* eslint-enable */

  const openLightbox = (FID) => {
    history.push(`/${FID}`);
  };
  /* eslint-disable */
  const closeLightbox = useCallback(() => {
    history.push(`/`);
  });
  /* eslint-enable */
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
