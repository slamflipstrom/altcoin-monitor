import React, { Component } from "react";
import PropTypes from "prop-types";

import PriceCardComponent from "./PriceCard";

class ExchangeComponent extends Component {
  render() {
    const { ethData, ltcData, dashData } = this.props;

    return ethData && ltcData && dashData ? (
      <div className="exchange">
        <h1 className="exchangeTitle">{this.props.exchangeName}</h1>
        <PriceCardComponent displayName="Ethereum" id="ETH" btcPrice={ethData} />
        <PriceCardComponent displayName="Litecoin" id="LTC" btcPrice={ltcData} />
        <PriceCardComponent displayName="Dash" id="DASH" btcPrice={dashData} />
      </div>
    ) : (
      <h1>Data not yet available</h1>
    );
  }
}

ExchangeComponent.propTypes = {
  ethData: PropTypes.string,
  ltcData: PropTypes.string,
  dashData: PropTypes.string
};

export default ExchangeComponent;
