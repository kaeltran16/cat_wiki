import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setLoading(false);
    } else {
      throw Error("error occur when fetching..");
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};

export { useFetch };
