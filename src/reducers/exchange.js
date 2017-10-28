const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_ETH":
      return { ...state };
    default:
      return state;
  }
};
