import { createContext } from "react";

const AppContext = createContext();

const appReducer = (state, action) => {
  switch(action.type) {
    case 'createList':
      return { showList: action.payload }
    default:
      return state;
  }
};

const initialState = {
  showList: new Array(),
}

export { AppContext, appReducer, initialState };