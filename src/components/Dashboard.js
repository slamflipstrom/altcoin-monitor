import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "../actions/actions";

import PriceCardComponent from "./PriceCard";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.requestApiData = props.actions.requestApiData.bind(this);
  }

  componentDidMount() {
    this.requestApiData();
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const excData = this.props.exchangeData;
    console.log("exchangeData:", excData);
    return Object.keys(excData).length ? (
      <div>
        <PriceCardComponent
          displayName={this.props.exchangeData.display_name}
          id={this.props.exchangeData.id}
          btcPrice={this.props.exchangeData.btcPrice}
        />
        <h1>{this.interval}</h1>
      </div>
    ) : (
      <h1>Loading... </h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchangeData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ requestApiData }, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
