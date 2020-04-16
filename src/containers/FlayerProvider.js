// store.js
import React, { createContext } from "react";
import useFlayers from "../hooks/useFlayers";
import { useParams } from "react-router-dom";
const FlayerContext = createContext({
  loading: false,
  flayers: [],
});

const FlayerProvider = ({ children }) => {
  const { FID } = useParams();
  const { flayers, loading } = useFlayers();
  return (
    <FlayerContext.Provider value={{ loading, flayers, FID }}>
      {loading ? <> ... </> : children}
    </FlayerContext.Provider>
  );
};

export default FlayerContext;
export { FlayerProvider };
