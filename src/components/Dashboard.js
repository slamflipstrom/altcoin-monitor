import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  requestCoincapAPIData,
  requestPoloniexAPIData,
  requestLivecoinAPIData
} from "../actions/actions";

import ExchangeComponent from "./Exchange";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.requestCoincapAPIData = props.actions.requestCoincapAPIData.bind(this);
    this.requestPoloniexAPIData = props.actions.requestPoloniexAPIData.bind(this);
    this.requestLivecoinAPIData = props.actions.requestLivecoinAPIData.bind(this);
  }

  componentDidMount() {
    this.requestCoincapAPIData();
    this.requestPoloniexAPIData();
    this.requestLivecoinAPIData();
    //consider moving to Redux
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { coincap, poloniex, livecoin } = this.props.exchangeData;
    return coincap && poloniex ? (
      <div>
        <ExchangeComponent
          ethData={coincap.ethData}
          ltcData={coincap.ltcData}
          dashData={coincap.dashData}
        />
        <ExchangeComponent
          ethData={poloniex.ethData}
          ltcData={poloniex.ltcData}
          dashData={poloniex.dashData}
        />
      </div>
    ) : (
      <h1>Loading...</h1>
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
    actions: bindActionCreators(
      { requestCoincapAPIData, requestPoloniexAPIData, requestLivecoinAPIData },
      dispatch
    )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
