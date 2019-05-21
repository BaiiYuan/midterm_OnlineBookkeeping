import React, { Component } from 'react'
import Chart from "chart.js";

import '../assets/css/bootstrap.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';

class PieGraph extends Component {
  constructor(props) {
    super(props)
  }
  chartRef = React.createRef();

  compareArr(arr1, arr2) {
    if (!arr1 || !arr2) {
      return false
    }
    if (arr1.length !== arr2.length)
      return false
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false
    }
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.compareArr(this.props.data[1], nextProps.data[1])) {
      const myChartRef = this.chartRef.current.getContext("2d");

      new Chart(myChartRef, {
        type: "line",
        data: {
          labels: nextProps.data[0],
          datasets: [
            {
              label: nextProps.labelsName,
              data: nextProps.data[1],
            },
          ]
        },
        options: {
        }
      });
    }
  }
  render() {
    return (
      <div className="col-lg-6">
        <div className="content-panel">
          <h4><i className="fa fa-angle-right"></i> {this.props.title}</h4>
          <div className="panel-body text-center">
            <canvas id="doughnut" height="300" width="400" ref={this.chartRef}></canvas>
          </div>
        </div>
      </div>
    )
  }
}

export default PieGraph;