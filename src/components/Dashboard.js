import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  requestCoincapAPIData,
  requestExmoAPIData,
  requestBleutradeAPIData
} from "../actions/actions";

import ExchangeComponent from "./Exchange";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.requestCoincapAPIData = props.actions.requestCoincapAPIData.bind(this);
    this.requestExmoAPIData = props.actions.requestExmoAPIData.bind(this);
    this.requestBleutradeAPIData = props.actions.requestBleutradeAPIData.bind(this);
  }

  componentDidMount() {
    this.requestCoincapAPIData();
    this.requestExmoAPIData();
    this.requestBleutradeAPIData();
    //consider moving to Redux
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { coincap, exmo, bleutrade } = this.props.exchangeData;
    return coincap && exmo && bleutrade ? (
      <div>
        <ExchangeComponent
          ethData={coincap.ethData}
          ltcData={coincap.ltcData}
          dashData={coincap.dashData}
        />
        <ExchangeComponent
          ethData={exmo.ethData}
          ltcData={exmo.ltcData}
          dashData={exmo.dashData}
        />
        <ExchangeComponent
          ethData={bleutrade.ethData}
          ltcData={bleutrade.ltcData}
          dashData={bleutrade.dashData}
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
      { requestCoincapAPIData, requestExmoAPIData, requestBleutradeAPIData },
      dispatch
    )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
