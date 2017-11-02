import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import exchangeData from "./exchangeData";
import currencyValues from "./currencyValues";
import historicalData from "./historicalData";

const rootReducer = combineReducers({
  exchangeData,
  currencyValues,
  historicalData,
  routing
});

export default rootReducer;
