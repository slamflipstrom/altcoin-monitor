import * as actions from "../actions/actions";

const defaultState = {
  ethHistory: undefined,
  ltcHistory: undefined,
  dashHistory: undefined,
  bestEth: undefined,
  bestLtc: undefined,
  bestDash: undefined
};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case actions.RECEIVE_HISTORICAL_DATA:
      return {
        ...state,
        ethHistory: data.ethData,
        ltcHistory: data.ltcData,
        dashHistory: data.dashData,
        bestEth: data.bestEth,
        bestLtc: data.bestLtc,
        bestDash: data.bestDash
      };
    default:
      return state;
  }
};
