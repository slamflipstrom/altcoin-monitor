import React, { Component } from "react";
import PropTypes from "prop-types";

class ReportComponent extends Component {
  render() {
    const { ethData, ltcData, dashData } = this.props;

    return ethData && ltcData && dashData ? (
      <div className="exchange">
        <h1 className="exchangeTitle">{this.props.exchangeName}</h1>
      </div>
    ) : (
      <h1>Data not yet available</h1>
    );
  }
}

ReportComponent.propTypes = {
  ethData: PropTypes.string,
  ltcData: PropTypes.string,
  dashData: PropTypes.string
};

export default ReportComponent;
