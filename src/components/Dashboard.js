import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions";

import PriceCardComponent from "./PriceCard";

class DashboardComponent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    return <PriceCardComponent />;
  }
}

const mapStateToProps = state => {
  return {
    exchange: state.exchange
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators(actions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
