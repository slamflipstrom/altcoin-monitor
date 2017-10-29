import React, { Component } from "react";

class PriceCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="price-card">
        <h1>NAME</h1>
      </div>
    );
  }
}
export default PriceCardComponent;
