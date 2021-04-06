import { createContext } from "react";

const AppContext = createContext();

const appReducer = (state, action) => {
  switch(action.type) {
    case 'createList':
      return { showList: action.payload }
    case 'setSelectedItem':
      return { ...state, selectedItem: action.payload }
    default:
      return state;
  }
};

const initialState = {
  showList: new Array(),
  selectedItem: null,
}

export { AppContext, appReducer, initialState };