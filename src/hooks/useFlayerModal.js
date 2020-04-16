import { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useFlayerModal = (flayers, FID) => {
  let history = useHistory();
  const [currentFlayer, setCurrentImage] = useState(-1);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  /* eslint-disable */
  useEffect(
    (_) => {
      const index = findFlayerIndex(FID);
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
  const findFlayerIndex = (FID) =>
    flayers ? flayers.findIndex((flayer) => flayer.FID === FID) : -1;

  const openModal = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(index >= 0);
  }, []);

  return {
    closeLightbox,
    openLightbox,
    currentFlayer,
    viewerIsOpen,
  };
};

export default useFlayerModal;
