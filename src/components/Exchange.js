import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

import PriceCardComponent from "./PriceCard";

class ExchangeComponent extends Component {
  componentDidMount() {
    this.props.actions.requestAllAPIData();
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const exchangeData = this.props.exchangeData;

    const data = Object.keys(exchangeData).map(ex => {
      <div className="exchange">
        <h1 className="exchangeTitle">{this.props.exchangeName}</h1>
        <PriceCardComponent displayName="Ethereum" id="ETH" btcValue={ex.ethValue} />
        <PriceCardComponent displayName="Litecoin" id="LTC" btcValue={ex.ltcValue} />
        <PriceCardComponent displayName="Dash" id="DASH" btcValue={ex.dashValue} />
      </div>;
    });
    // const data = <h1>Hi</h1>;
    return data;
  }
}

ExchangeComponent.propTypes = {
  ethValue: PropTypes.string,
  ltcValue: PropTypes.string,
  dashValue: PropTypes.string
};

const mapStateToProps = state => {
  return {
    exchangeData: state.exchangeData,
    currencyValues: state.currencyValues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeComponent);
