import React, { Component } from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions";

class ReportComponent extends Component {
  componentDidMount() {
    const { coincap, exmo, bleutrade } = this.props.historicalData;
    this.props.actions.requestHistoricalData();
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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

const mapStateToProps = state => {
  return {
    historicalData: state.historicalData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

ReportComponent.propTypes = {
  ethData: PropTypes.string,
  ltcData: PropTypes.string,
  dashData: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportComponent);
