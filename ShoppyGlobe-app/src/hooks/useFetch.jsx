// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // A flag to track if the component is mounted
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (isMounted) { // Only set state if the component is still mounted
          setData(data.products || data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchData();

    // Cleanup function
    return () => {
      isMounted = false; // Set the flag to false on unmount
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;