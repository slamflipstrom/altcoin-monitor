export const REQUEST_COINCAP_API_DATA = "REQUEST_COINCAP_API_DATA";
export const RECEIVE_COINCAP_API_DATA = "RECEIVE_COINCAP_API_DATA";
export const COINCAP_REQUEST_FAILURE = "COINCAP_REQUEST_FAILURE";

export const REQUEST_EXMO_API_DATA = "REQUEST_EXMO_API_DATA";
export const RECEIVE_EXMO_API_DATA = "RECEIVE_EXMO_API_DATA";
export const EXMO_REQUEST_FAILURE = "EXMO_REQUEST_FAILURE";

export const REQUEST_BLEUTRADE_API_DATA = "REQUEST_BLEUTRADE_API_DATA";
export const RECEIVE_BLEUTRADE_API_DATA = "RECEIVE_BLEUTRADE_API_DATA";
export const BLEUTRADE_REQUEST_FAILURE = "BLEUTRADE_REQUEST_FAILURE";

export const requestCoincapAPIData = () => ({ type: REQUEST_COINCAP_API_DATA });
export const receiveCoincapAPIData = data => ({ type: RECEIVE_COINCAP_API_DATA, data });

export const requestExmoAPIData = () => ({ type: REQUEST_EXMO_API_DATA });
export const receiveExmoAPIData = data => ({ type: RECEIVE_EXMO_API_DATA, data });

export const requestBleutradeAPIData = () => ({ type: REQUEST_BLEUTRADE_API_DATA });
export const receiveBleutradeAPIData = data => ({
  type: RECEIVE_BLEUTRADE_API_DATA,
  data
});
