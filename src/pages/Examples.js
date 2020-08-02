import React, { Component } from "react";

import {InputNumber, InputDate} from "elements/Form/";
import Breadcrumb from "elements/Breadcrumb/index"
export default class Examples extends Component {
  state = {
    valueNumber: "1",
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    
    const breadcrumbList = [
      {pageTitle : "Home", pageHref: ""},
      {pageTitle : "House Details", pageHref: ""}
    ]

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "50vh" }}
        >
          <div className="col-auto">
            <InputNumber
              max={30}
              onChange={this.handleChange}
              name="valueNumber"
              suffix=" night"
              isSuffixPlural
              value={this.state.valueNumber}
            />
          </div>
        </div>
        <div
          className="row align-items-center justify-content-center"
          style={{ marginTop: '20px' }}
        >
          <div className="col-auto">
          <InputDate
            max={30}
            onChange={this.handleChange}
            name="value"
            value={this.state.value}
          />
          </div>
        </div>
        <div
          className="row align-items-center justify-content-center"
          style={{ marginTop: '20px' }}
        >
          <div className="col-auto">
          <Breadcrumb data={breadcrumbList}/>
          </div>
        </div>
      </div>
    );
  }
}
