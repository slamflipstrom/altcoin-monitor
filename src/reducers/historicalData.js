import * as actions from "../actions/actions";

const defaultState = {
  ethHistory: undefined,
  ltcHistory: undefined,
  dashHistory: undefined
};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case actions.RECEIVE_HISTORICAL_DATA:
      return {
        ...state,
        ethHistory: data.ethData,
        ltcHistory: data.ltcData,
        dashHistory: data.dashData
      };
    default:
      return state;
  }
};
