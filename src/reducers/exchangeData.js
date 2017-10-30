import { REQUEST_API_DATA, RECEIVE_API_DATA } from "../actions/actions";

const REQUEST_SUCCESS = "REQUEST_SUCCESS";

export default (state = {}, { type, data }) => {
  console.log("reducer data:", data);
  switch (type) {
    case REQUEST_API_DATA:
      return state;
    case RECEIVE_API_DATA:
      // return { ...state, data };
      return data;
    default:
      return state;
  }
};
