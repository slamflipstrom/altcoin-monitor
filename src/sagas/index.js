import { all, fork } from "redux-saga/effects";
import { apiDataSaga } from "./apiSagas";
import { historicalDataSaga } from "./historicalData";

export default function* rootSaga() {
  yield all([fork(apiDataSaga), fork(historicalDataSaga)]);
}
