import { combineReducers } from "redux";
import exchangeData from "./exchangeData";
import currencyValues from "./currencyValues";

const rootReducer = combineReducers({
  exchangeData,
  currencyValues
});

export default rootReducer;
