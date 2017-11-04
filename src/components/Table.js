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
              <td className="dateCell">Date</td>
              <td className="priceCell">Price</td>
            </tr>
          </thead>
          <tbody>
            {formattedData.map(item => (
              <tr key={item}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
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
