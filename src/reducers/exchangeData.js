import * as actions from "../actions/actions";

const defaultState = {
  coincap: undefined,
  exmo: undefined,
  bleutrade: undefined
};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case actions.RECEIVE_COINCAP_API_DATA:
      return { ...state, coincap: data };
    case actions.RECEIVE_EXMO_API_DATA:
      return { ...state, exmo: data };
    case actions.RECEIVE_BLEUTRADE_API_DATA:
      return { ...state, bleutrade: data };
    default:
      return state;
  }
};
