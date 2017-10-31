export const REQUEST_COINCAP_API_DATA = "REQUEST_COINCAP_API_DATA";
export const RECEIVE_COINCAP_API_DATA = "RECEIVE_COINCAP_API_DATA";
export const RECEIVE_ETH_DATA = "RECEIVE_ETH_DATA";
export const RECEIVE_LTC_DATA = "RECEIVE_LTC_DATA";
export const RECEIVE_DASH_DATA = "RECEIVE_DASH_DATA";

export const requestCoincapAPIData = () => ({ type: REQUEST_COINCAP_API_DATA });

export const receiveCoincapAPIData = data => ({ type: RECEIVE_COINCAP_API_DATA, data });
export const receiveLtcData = data => ({ type: RECEIVE_LTC_DATA, data });
export const receiveDashData = data => ({ type: RECEIVE_DASH_DATA, data });
