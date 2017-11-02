import { call } from "redux-saga/effects";
import { apiDataSaga } from "./apiSagas";

export default function* rootSaga() {
  yield call(apiDataSaga);
}
