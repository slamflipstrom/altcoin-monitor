import * as actions from "../actions/actions";

const REQUEST_SUCCESS = "REQUEST_SUCCESS";

const defaultState = {
  ethData: undefined,
  ltcData: undefined,
  dashData: undefined
};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case actions.RECEIVE_COINCAP_API_DATA:
      return { ...state, coincap: data };
    case actions.RECEIVE_ETH_DATA:
      return { ...state, ethData: data };
    case actions.RECEIVE_LTC_DATA:
      return data;
    case actions.RECEIVE_DASH_DATA:
      return data;
    default:
      return state;
  }
};
