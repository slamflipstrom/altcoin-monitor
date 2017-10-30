import React, { Component } from "react";

class PriceCardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("pc props", this.props);
    return (
      <div className="price-card">
        <h1>Display Name: {this.props.displayName}</h1>
        <h1>ID: {this.props.id}</h1>
        <h1>Bitcoin Price: {this.props.btcPrice}</h1>
      </div>
    );
  }
}
export default PriceCardComponent;
