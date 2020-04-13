// store.js
import React, { useState, useEffect } from "react";
import { db } from "../services/firebase";

const useFlyers = () => {
  const [flyers, setFlyers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFlyers = React.useCallback(async (_) => {
    setLoading(true);
    const snapshot = await db.collection("flyers").get();
    setFlyers(
      snapshot.docs.map((doc) => ({
        FID: doc.id,
        ...doc.data(),
      }))
    );
    setLoading(false);
  });

  useEffect((_) => {
    fetchFlyers();
  }, []);

  return {
    flyers,
    loading,
  };
};

export default useFlyers;