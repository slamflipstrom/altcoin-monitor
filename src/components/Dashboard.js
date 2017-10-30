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
  }

  data = (x, i) => (
    <div key={x.id}>
      <h1>{x.id}</h1>
      <h1>{x.displayName}</h1>
      <h1>{x.btcPrice}</h1>
    </div>
  );

  render() {
    console.log("exchangeData:", this.props.exchangeData);
    const { excData = [] } = this.props.exchangeData;
    // return excData.length ? <h1>{excData.map(this.data)}</h1> : <h1>Loading... </h1>;
    return (
      <PriceCardComponent
        displayName={this.props.exchangeData.display_name}
        id={this.props.exchangeData.id}
        btcPrice={this.props.exchangeData.btcPrice}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log("mstp state:", state);
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
