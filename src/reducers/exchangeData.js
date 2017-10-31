import * as actions from "../actions/actions";

const defaultState = {
  coincap: undefined,
  poloniex: undefined,
  livecoin: undefined
};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case actions.RECEIVE_COINCAP_API_DATA:
      return { ...state, coincap: data };
    case actions.RECEIVE_POLONIEX_API_DATA:
      return { ...state, poloniex: data };
    case actions.RECEIVE_LIVECOIN_API_DATA:
      return { ...state, livecoin: data };
    default:
      return state;
  }
};
