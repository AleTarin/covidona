// store.js
import React, { useState, useEffect } from "react";
import { db } from "../services/firebase";

const useFlayers = () => {
  const [flayers, setFlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFlayers = React.useCallback(async (_) => {
    setLoading(true);
    const snapshot = await db.collection("flyers").get();
    setFlayers(
      snapshot.docs.map((doc) => ({
        FID: doc.id,
        ...doc.data(),
      }))
    );
    setLoading(false);
  }, []);
  /* eslint-disable */
  useEffect((_) => {
    fetchFlayers();
  }, []);
  /* eslint-enable */
  return {
    flayers,
    loading,
  };
};

export default useFlayers;