import * as actions from "../actions/actions";

const defaultState = {
  ethValues: undefined,
  ltcValues: undefined,
  dashValues: undefined
};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case actions.RECEIVE_ALL_API_DATA:
      return {
        ...state,
        ethValues: data.ethValues,
        ltcValues: data.ltcValues,
        dashValues: data.dashValues
      };
    default:
      return state;
  }
};
