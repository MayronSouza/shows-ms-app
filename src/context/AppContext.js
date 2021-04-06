const appReducer = (state, action) => {
  switch(action.type) {
    case 'createList':
      return { showList: action.payload }
    default:
      return state;
  }
};

export { appReducer };