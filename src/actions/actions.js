export const REQUEST_COINCAP_API_DATA = "REQUEST_COINCAP_API_DATA";
export const RECEIVE_COINCAP_API_DATA = "RECEIVE_COINCAP_API_DATA";
export const COINCAP_REQUEST_FAILURE = "COINCAP_REQUEST_FAILURE";

export const REQUEST_POLONIEX_API_DATA = "REQUEST_POLONIEX_API_DATA";
export const RECEIVE_POLONIEX_API_DATA = "RECEIVE_POLONIEX_API_DATA";
export const POLONIEX_REQUEST_FAILURE = "POLONIEX_REQUEST_FAILURE";

export const REQUEST_LIVECOIN_API_DATA = "REQUEST_LIVECOIN_API_DATA";
export const RECEIVE_LIVECOIN_API_DATA = "RECEIVE_LIVECOIN_API_DATA";
export const LIVECOIN_REQUEST_FAILURE = "LIVECOIN_REQUEST_FAILURE";

export const requestCoincapAPIData = () => ({ type: REQUEST_COINCAP_API_DATA });
export const receiveCoincapAPIData = data => ({ type: RECEIVE_COINCAP_API_DATA, data });

export const requestPoloniexAPIData = () => ({ type: REQUEST_POLONIEX_API_DATA });
export const receivePoloniexAPIData = data => ({ type: RECEIVE_POLONIEX_API_DATA, data });

export const requestLivecoinAPIData = () => ({ type: REQUEST_LIVECOIN_API_DATA });
export const receiveLivecoinAPIData = data => ({ type: RECEIVE_LIVECOIN_API_DATA, data });
