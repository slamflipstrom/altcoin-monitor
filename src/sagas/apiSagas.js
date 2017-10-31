import { all, call, put, takeEvery } from "redux-saga/effects";

import * as actions from "../actions/actions";
import { fetchData } from "../api";

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
  } catch (e) {
    console.log(e);
    // yield error message
  }
}

export function* coincapSaga() {
  yield takeEvery(actions.REQUEST_COINCAP_API_DATA, requestCoincapAPIData);
}

function* requestPoloniexAPIData(action) {
  try {
    const data = yield call(fetchData, "https://api.exmo.com/v1/ticker/");
    yield put(
      actions.receivePoloniexAPIData({
        data
      })
    );
  } catch (e) {
    console.log(e);
    // yield error message
  }
}

export function* poloniexSaga() {
  yield takeEvery(actions.REQUEST_POLONIEX_API_DATA, requestPoloniexAPIData);
}

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
  } catch (e) {
    console.log(e);
    // yield error message
  }
}

export function* livecoinSaga() {
  yield takeEvery(actions.REQUEST_LIVECOIN_API_DATA, requestLivecoinAPIData);
}
