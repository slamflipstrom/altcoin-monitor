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
