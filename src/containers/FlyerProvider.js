// store.js
import React, { useState, useEffect, createContext } from "react";
import { db } from "../services/firebase";

const FlyerContext = createContext({
  loading: false,
  flyers: [],
});

const FlyerProvider = ({ children }) => {
  const [flyers, setFlyers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFlyers = async (_) => {
    setLoading(true);
    const snapshot = await db.collection("flyers").get();
    setFlyers(snapshot.docs.map((doc) => {
      return {
        FID: doc.id,
        ...doc.data()}
    }));
    setLoading(false);
  };

  useEffect((_) => {
    fetchFlyers();
  }, []);

  return (
    <FlyerContext.Provider value={{ loading, flyers }}>
      {children}
    </FlyerContext.Provider>
  );
};

export default FlyerContext;
export { FlyerProvider };
