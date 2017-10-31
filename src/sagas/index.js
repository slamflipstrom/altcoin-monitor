import { all, fork } from "redux-saga/effects";
import { coincapSaga, exmoSaga, bleutradeSaga } from "./apiSagas";

export default function* rootSaga() {
  yield all([fork(coincapSaga), fork(exmoSaga), fork(bleutradeSaga)]);
}
