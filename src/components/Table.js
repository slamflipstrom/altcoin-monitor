import React, { Component } from "react";
import PropTypes from "prop-types";
import * as moment from "moment";

class TableComponent extends Component {
  formatData() {
    return this.props.data
      .map(x => {
        return [
          moment(x[0])
            .local()
            .format("dddd, MMMM Do YYYY, h:mm:ss a"),
          x[1]
        ];
      })
      .reverse();
  }

  priceInBtc(price) {
    let btcPrice = price / this.props.btcPrice;
    return btcPrice.toFixed(5);
  }

  findBestValue(price) {
    if (price === this.props.bestPrice) {
      return "bestValue";
    }
  }

  render() {
    let formattedData = this.formatData();
    return (
      <div className="reportTable">
        <table>
          <thead>
            <tr className="currencyRow">
              <th className="currencyName">
                <span>{this.props.name}</span>
              </th>
            </tr>
            <tr>
              <td className="headerCell">Date</td>
              <td className="headerCell">Price</td>
            </tr>
          </thead>
          <tbody>
            {formattedData.map(item => (
              <tr key={item} className={this.findBestValue(item[1], this.props.name)}>
                <td className="dateCell">{item[0]}</td>
                <td className="priceCell">₿ {this.priceInBtc(item[1])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
  id: PropTypes.string,
  name: PropTypes.string
};

export default TableComponent;
