// store.js
import React, { createContext } from "react";
import useFlyers from "../hooks/useFlyers";
import { useParams } from "react-router-dom";
const FlyerContext = createContext({
  loading: false,
  flyers: [],
});

const FlyerProvider = ({ children }) => {
  const { FID } = useParams();
  const { flyers, loading } = useFlyers();
  return (
    <FlyerContext.Provider value={{ loading, flyers, FID }}>
      {loading ? <> ... </> : children}
    </FlyerContext.Provider>
  );
};

export default FlyerContext;
export { FlyerProvider };
