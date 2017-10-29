import { REQUEST_API_DATA, RECEIVE_API_DATA } from "../actions/actions";
const defaultState = {};

export default (state = defaultState, action, data = "") => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return "Requsted data";
    // return { ...state };
    case RECEIVE_API_DATA:
      // return { ...state };
      return data;
    default:
      return state;
  }
};
