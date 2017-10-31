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

//EXMO
function* requestExmoAPIData(action) {
  try {
    const data = yield call(fetchData, "https://api.exmo.com/v1/ticker/");
    yield put(
      actions.receiveExmoAPIData({
        ethData: data.ETH_BTC,
        ltcData: data.LTC_BTC,
        dashData: data.DASH_BTC
      })
    );
  } catch (error) {
    console.log(error);
    yield put({ type: actions.EXMO_REQUEST_FAILURE, error });
  }
}

export function* exmoSaga() {
  yield takeEvery(actions.REQUEST_EXMO_API_DATA, requestExmoAPIData);
}

//Bluetrade
function* requestBleutradeAPIData(action) {
  try {
    const [ethData, ltcData, dashData] = yield all([
      call(fetchData, "https://bleutrade.com/api/v2/public/getticker?market=ETH_BTC"),
      call(fetchData, "https://bleutrade.com/api/v2/public/getticker?market=LTC_BTC"),
      call(fetchData, "https://bleutrade.com/api/v2/public/getticker?market=DASH_BTC")
    ]);
    yield put(
      actions.receiveBleutradeAPIData({
        ethData: ethData.result[0],
        ltcData: ltcData.result[0],
        dashData: dashData.result[0]
      })
    );
  } catch (error) {
    console.log(error);
    yield put({ type: actions.BLEUTRADE_REQUEST_FAILURE, error });
  }
}

export function* bleutradeSaga() {
  yield takeEvery(actions.REQUEST_BLEUTRADE_API_DATA, requestBleutradeAPIData);
}
