//React
import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store, { history } from "./store";

import "./index.css";
import App from "./App";
import ReportComponent from "./components/Report";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/report" component={ReportComponent} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
