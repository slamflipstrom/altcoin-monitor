import { all, call, put, takeEvery } from "redux-saga/effects";

import * as actions from "../actions/actions";
import { fetchData } from "../api";

//COINCAP
function* requestCoincapAPIData(action) {
  try {
    const [ethData, ltcData, dashData] = yield all([
      call(fetchData, "http://coincap.io/page/ETH"),
      call(fetchData, "http://coincap.io/page/LTC"),
      call(fetchData, "http://coincap.io/page/DASH")
    ]);
    yield put(
      actions.receiveCoincapAPIData({
        ethData,
        ltcData,
        dashData
      })
    );
  } catch (error) {
    console.log(error);
    yield put({ type: actions.COINCAP_REQUEST_FAILURE, error });
  }
}

export function* coincapSaga() {
  yield takeEvery(actions.REQUEST_COINCAP_API_DATA, requestCoincapAPIData);
}

//POLONIEX
function* requestPoloniexAPIData(action) {
  try {
    const data = yield call(fetchData, "https://api.exmo.com/v1/ticker/");
    yield put(
      actions.receivePoloniexAPIData({
        ethData: data.ETH_BTC,
        ltcData: data.LTC_BTC,
        dashData: data.DASH_BTC
      })
    );
  } catch (error) {
    console.log(error);
    yield put({ type: actions.POLONIEX_REQUEST_FAILURE, error });
  }
}

export function* poloniexSaga() {
  yield takeEvery(actions.REQUEST_POLONIEX_API_DATA, requestPoloniexAPIData);
}

//LIVECOIN
function* requestLivecoinAPIData(action) {
  try {
    const [ethData, ltcData, dashData] = yield all([
      call(fetchData, "https://cex.io/api/last_price/ETH/USD"),
      call(fetchData, "https://cex.io/api/last_price/LTC/USD"),
      call(fetchData, "https://cex.io/api/last_price/DASH/USD")
    ]);
    yield put(
      actions.receiveLivecoinAPIData({
        ethData,
        ltcData,
        dashData
      })
    );
  } catch (error) {
    console.log(error);
    yield put({ type: actions.LIVECOIN_REQUEST_FAILURE, error });
  }
}

export function* livecoinSaga() {
  yield takeEvery(actions.REQUEST_LIVECOIN_API_DATA, requestLivecoinAPIData);
}
