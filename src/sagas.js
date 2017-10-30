import { call, put, takeEvery } from "redux-saga/effects";

import * as actions from "./actions/actions";
import { fetchData } from "./api";

// worker Saga: will be fired on REQUEST_API_DATA actions
function* requestApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(actions.receiveApiData(data));
  } catch (e) {
    console.log(e);
    // yield error message
  }
}

/*
  Starts fetchData on each dispatched `REQUEST_API_DATA` action.
  Allows concurrent fetches of exchange data.
*/
function* mySaga() {
  yield takeEvery(actions.REQUEST_API_DATA, requestApiData);
}

export default mySaga;
