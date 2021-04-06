import { useContext, useEffect } from "react";
import { showApi } from "../api/show";
import { AppContext } from "../context/AppContext";

const useShows = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    showApi.get('/shows').then(response => {
      dispatch({ type: 'createList', payload: response.data });
    });
  }, []);

  return { shows: state.showList };
}

export { useShows };