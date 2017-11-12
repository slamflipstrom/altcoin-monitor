import React, { Component } from "react";
import PropTypes from "prop-types";

class PriceCardComponent extends Component {
  render() {
    return (
      <div className="price-card">
        <h1 className="currencyName">{this.props.displayName}</h1>
        <h1 className={this.props.id + "value"}>₿{this.props.btcValue}</h1>
      </div>
    );
  }
}

PriceCardComponent.propTypes = {
  displayName: PropTypes.string,
  id: PropTypes.string,
  btcValue: PropTypes.string
};

export default PriceCardComponent;
