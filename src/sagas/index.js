import { all, fork, put, takeEvery } from "redux-saga/effects";
import { coincapSaga } from "./apiSagas";

export default function* rootSaga() {
  yield all([fork(coincapSaga)]);
}
