import React, { Component } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/style.css';

class MainRoot extends Component {
  handleChange = (e) => {
    this.props.handleChange(e.target.value)
  }
  render() {
    return (
      <div className="col-md-12 mt">
        <div className="content-panel">
          <h4><i className="fa fa-angle-right"></i> {this.props.title}</h4>
          <table className="table table-hover" style={{ textAlign: "center" }}>
              <thead>
              <tr>
                  <th style={{ textAlign: "center" }}>#</th>
                  <th style={{ textAlign: "center" }}> 類別</th>
                  <th style={{ textAlign: "center" }}> 名稱</th>
                  <th style={{ textAlign: "center" }}> 價錢</th>
                  <th style={{ textAlign: "center" }}> 日期</th>
              </tr>
              </thead>
              <tbody>{this.props.getData}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default MainRoot;

