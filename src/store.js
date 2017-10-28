import { createStore } from "redux";
import rootReducer from "./reducers";

export const initialState = {
  exchange: {
    dash: 0,
    eth: 0,
    ltc: 0
  }
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
