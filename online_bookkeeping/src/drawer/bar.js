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
    if (arr1.length !== arr2.length)
      return false
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false
    }
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.compareArr(this.props.data, nextProps.data)) {
      const myChartRef = this.chartRef.current.getContext("2d");
      new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: nextProps.labels,
          datasets: [
            {
              label: nextProps.labelsName,
              data: nextProps.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
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