import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(rootSaga);

export default store;
