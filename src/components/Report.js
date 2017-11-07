import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions";
import TableComponent from "./Table";

class ReportComponent extends Component {
  componentDidMount() {
    this.props.actions.requestHistoricalData();
  }

  render() {
    const { ethHistory, ltcHistory, dashHistory, btcPrice } = this.props.historicalData;
    let prev30Eth = [];
    let prev30Ltc = [];
    let prev30Dash = [];
    if (typeof ethHistory !== "undefined") {
      prev30Eth = ethHistory.slice(Math.max(ethHistory.length - 30, 1));
    }
    if (typeof ltcHistory !== "undefined") {
      prev30Ltc = ltcHistory.slice(Math.max(ltcHistory.length - 30, 1));
    }
    if (typeof dashHistory !== "undefined") {
      prev30Dash = dashHistory.slice(Math.max(dashHistory.length - 30, 1));
    }

    return prev30Eth && ltcHistory && dashHistory ? (
      <div className="report">
        <Link to="/">
          <button className="linkHome">Home</button>
        </Link>
        <TableComponent name="Ethereum" id="ETH" data={prev30Eth} btcPrice={btcPrice} />
        <TableComponent name="Litecoin" id="LTC" data={prev30Ltc} btcPrice={btcPrice} />
        <TableComponent name="Dash" id="DASH" data={prev30Dash} btcPrice={btcPrice} />
      </div>
    ) : (
      <h1>Data not yet available</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    historicalData: state.historicalData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportComponent));
