import React, { Component } from "react";
import PropTypes from "prop-types";

import PriceCardComponent from "./PriceCard";

class ExchangeComponent extends Component {
  render() {
    const { ethValue, ltcValue, dashValue } = this.props;
    return ethValue && ltcValue && dashValue ? (
      <div className="exchange">
        <h1 className="exchangeTitle">{this.props.exchangeName}</h1>
        <PriceCardComponent displayName="Ethereum" id="ETH" btcValue={ethValue} />
        <PriceCardComponent displayName="Litecoin" id="LTC" btcValue={ltcValue} />
        <PriceCardComponent displayName="Dash" id="DASH" btcValue={dashValue} />
      </div>
    ) : (
      <h1>Data Loading...</h1>
    );
  }
}

ExchangeComponent.propTypes = {
  ethValue: PropTypes.string,
  ltcValue: PropTypes.string,
  dashValue: PropTypes.string
};

export default ExchangeComponent;
