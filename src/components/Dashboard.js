import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions";

import ExchangeComponent from "./Exchange";

class DashboardComponent extends Component {
  componentDidMount() {
    const { coincap, exmo, bleutrade } = this.props.exchangeData;
    this.props.actions.requestAllAPIData();
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { coincap, exmo, bleutrade } = this.props.exchangeData;
    return coincap && exmo && bleutrade ? (
      <div>
        <ExchangeComponent
          id="coincapExchange"
          exchangeName="Coincap"
          ethData={coincap.ethData}
          ltcData={coincap.ltcData}
          dashData={coincap.dashData}
        />
        <ExchangeComponent
          id="exmoExchange"
          exchangeName="Exmo"
          ethData={exmo.ethData}
          ltcData={exmo.ltcData}
          dashData={exmo.dashData}
        />
        <ExchangeComponent
          id="bleutradeExchange"
          exchangeName="Bleutrade"
          ethData={bleutrade.ethData}
          ltcData={bleutrade.ltcData}
          dashData={bleutrade.dashData}
        />
      </div>
    ) : (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchangeData,
    ethValues: state.ethValues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
