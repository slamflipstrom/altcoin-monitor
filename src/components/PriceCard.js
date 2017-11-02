import React, { Component } from "react";

class PriceCardComponent extends Component {
  render() {
    return (
      <div className="price-card">
        <h1 className="currencyName">Name: {this.props.displayName}</h1>
        <h1 className="currencyId">ID: {this.props.id}</h1>
        <h1 className={this.props.id + "value"}>Value: ₿{this.props.btcValue}</h1>
      </div>
    );
  }
}
export default PriceCardComponent;
