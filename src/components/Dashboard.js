import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestCoincapAPIData } from "../actions/actions";

import PriceCardComponent from "./PriceCard";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.requestCoincapAPIData = props.actions.requestCoincapAPIData.bind(this);
  }

  componentDidMount() {
    this.requestCoincapAPIData();
    //consider moving to Redux
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { coincap } = this.props.exchangeData;
    return coincap ? (
      <div>
        <PriceCardComponent
          displayName={coincap.ethData.display_name}
          id={coincap.ethData.id}
          btcPrice={coincap.ethData.rice_btc}
          usdPrice={coincap.ethData.price}
        />
        <PriceCardComponent
          displayName={coincap.ltcData.display_name}
          id={coincap.ltcData.id}
          btcPrice={coincap.ltcData.price_btc}
          usdPrice={coincap.ltcData.price}
        />
        <PriceCardComponent
          displayName={coincap.dashData.display_name}
          id={coincap.dashData.id}
          btcPrice={coincap.dashData.price_btc}
          usdPrice={coincap.dashData.price}
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
    actions: bindActionCreators({ requestCoincapAPIData }, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
