//React
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store, { history } from "./store";

import "./index.css";
import App from "./App";
import ReportComponent from "./components/Report";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/report" component={ReportComponent} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
