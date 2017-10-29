import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const initialState = {
  exchange: {
    ex1: {
      dash: 0,
      eth: 0,
      ltc: 0
    }
  }
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(saga);

export default store;
