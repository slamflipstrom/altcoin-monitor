import { all, call, put, takeEvery } from "redux-saga/effects";

import * as actions from "../actions/actions";
import { fetchData } from "../api";

function sliceRecentResults(priceArray) {
  return priceArray.slice(Math.max(priceArray.length - 30, 1));
}

function evalBestRate(array) {
  let slicedResults = sliceRecentResults(array);
  let lowValue = slicedResults
    .map(dataPoint => {
      return dataPoint[1];
    })
    .reduce(function(a, b, idx) {
      return Math.min(a, b);
    });
  return lowValue;
}

//HISTORICAL DATA from COINCAP
function* requestHistoricalData() {
  try {
    const [ethData, ltcData, dashData, btcRate] = yield all([
      call(fetchData, "http://coincap.io/history/1day/ETH"),
      call(fetchData, "http://coincap.io/history/1day/LTC"),
      call(fetchData, "http://coincap.io/history/1day/DASH"),
      call(fetchData, "http://coincap.io/page/BTC")
    ]);
    yield put(
      actions.receiveHistoricalData({
        ethData: sliceRecentResults(ethData.price),
        ltcData: sliceRecentResults(ltcData.price),
        dashData: sliceRecentResults(dashData.price),
        btcPrice: btcRate.price,
        bestEth: evalBestRate(ethData.price),
        bestLtc: evalBestRate(ltcData.price),
        bestDash: evalBestRate(dashData.price)
      })
    );
  } catch (error) {
    console.log(error);
    yield put({ type: actions.HISTORICAL_DATA_REQUEST_FAILURE, error });
  }
}

export function* historicalDataSaga() {
  yield takeEvery(actions.REQUEST_HISTORICAL_DATA, requestHistoricalData);
}
