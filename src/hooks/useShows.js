import { useState, useEffect } from "react";
import { showApi } from "../api/show";

const useShows = () => {
  const [shows, setShows] = useState(null);

  useEffect(() => {
    showApi.get('/shows').then(response => {
      setShows(response.data);
    });
  }, []);

  return { shows: shows };
}

export { useShows };