import React, { Component } from "react";

import PriceCardComponent from "./PriceCard";

class ExchangeComponent extends Component {
  priceCard = {};

  render() {
    const { ethData, ltcData, dashData } = this.props;
    return (
      <div className="exchange">
        <PriceCardComponent displayName="Ethereum" id="ETH" />
        <PriceCardComponent displayName="Litecoin" id="LTC" />
        <PriceCardComponent displayName="Dash" id="DASH" />
      </div>
    );
  }
}
// displayName="hi"
// id={ethData.id}
// btcPrice={ethData}
// usdPrice={ethData}

export default ExchangeComponent;
