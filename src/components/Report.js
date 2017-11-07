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
    const {
      ethHistory,
      ltcHistory,
      dashHistory,
      bestEth,
      bestLtc,
      bestDash,
      btcPrice
    } = this.props.historicalData;

    return ethHistory && ltcHistory && dashHistory ? (
      <div className="report">
        <Link to="/">
          <button className="linkHome">Back to Dashboard</button>
        </Link>
        <TableComponent
          name="Ethereum"
          id="ETH"
          data={ethHistory}
          bestPrice={bestEth}
          btcPrice={btcPrice}
        />
        <TableComponent
          name="Litecoin"
          id="LTC"
          data={ltcHistory}
          bestPrice={bestLtc}
          btcPrice={btcPrice}
        />
        <TableComponent
          name="Dash"
          id="DASH"
          data={dashHistory}
          bestPrice={bestDash}
          btcPrice={btcPrice}
        />
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
