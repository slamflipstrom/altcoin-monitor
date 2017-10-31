import { all, fork } from "redux-saga/effects";
import { coincapSaga, poloniexSaga, livecoinSaga } from "./apiSagas";

export default function* rootSaga() {
  yield all([fork(coincapSaga), fork(poloniexSaga), fork(livecoinSaga)]);
}
