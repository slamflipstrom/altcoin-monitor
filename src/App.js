import React, { Component } from "react";
import "./App.css";

import DashboardComponent from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Granny's Altcoin Monitor</h1>
          <h3 className="App-intro">
            Below you will find current values for Ethereum, Litecoin, and Dash displayed
            relative to Bitcoin's value.
          </h3>
        </header>
        <DashboardComponent />
      </div>
    );
  }
}

export default App;
