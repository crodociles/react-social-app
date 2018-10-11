//Status reducer
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_STATUS":
      return [...state, action.status];
    default:
      return state;
  }
};
