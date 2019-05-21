import React, { Component } from 'react';
import { socket } from "../component/Header.js"

import Line from "../drawer/line.js"
import Pie from "../drawer/pie.js"
import Bar from "../drawer/bar.js"

import '../assets/css/bootstrap.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';

let cat_dict = {
  "cat1":"食物",
  "cat2":"飲品",
  "cat3":"交通",
  "cat4":"娛樂",
  "cat5":"其他"
}
let categories = ["食物", "飲品", "交通", "娛樂", "其他"]

let todayDate = new Date()
let date = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          "-",
          (mm>9 ? '' : '0') + mm,
          "-",
          (dd>9 ? '' : '0') + dd
         ].join('');
};


class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dailyData: NaN,
      monthlyData: NaN,
      totallyData: NaN,
      lastDateData: NaN,
    }

    this.getAllData = this.getAllData.bind(this);
    this.getMonthlyData = this.getMonthlyData.bind(this);
    this.getDailyData = this.getDailyData.bind(this);

    this.getDailyMoney = this.getDailyMoney.bind(this);
    this.calculateMoneyFromData = this.calculateMoneyFromData.bind(this);
    this.updateRecordData = this.updateRecordData.bind(this);
    setInterval(this.updateRecordData, 300);
  }

  updateRecordData() {
    socket.emit("request");
    socket.on("output", data => {
      data = data.sort(function(a, b) {return b.year - a.year;})
      data = data.sort(function(a, b) {return b.month - a.month;})
      data = data.sort(function(a, b) {return b.date - a.date;})
      this.setState({ data: data });
    });
    this.getDailyMoney()
    this.getMonthlyMoney()
    this.getAllMoney()
    this.getLastTenDayMoney()
  }

  getAllMoney() {
    let origin = this.getAllData()
    var out = []
    for (var i = 1; i <= 5; i++) {
      let tmp = origin.slice().filter(function(x) { return x.cat === "cat"+i })
      out.push(this.calculateMoneyFromData(tmp))
    }
    this.setState({ totallyData: out })
  }

  getAllData() {
    return this.state.data
  }

  getMonthlyData() {
    let tmp = this.state.data.filter(function(x) { return x.year === year })
    tmp = tmp.filter(function(x) { return x.month === month })
    return tmp
  }

  getMonthlyMoney() {
    let origin = this.getMonthlyData()
    var out = []
    for (var i = 1; i <= 5; i++) {
      let tmp = origin.slice().filter(function(x) { return x.cat === "cat"+i })
      out.push(this.calculateMoneyFromData(tmp))
    }
    this.setState({ monthlyData: out })
  }

  getDailyData() {
    let tmp = this.state.data.filter(function(x) { return x.year === year })
    tmp = tmp.filter(function(x) { return x.month === month })
    tmp = tmp.filter(function(x) { return x.date === date })
    return tmp
  }

  getDailyMoney() {
    let origin = this.getDailyData()
    var out = []
    for (var i = 1; i <= 5; i++) {
      let tmp = origin.slice().filter(function(x) { return x.cat === "cat"+i })
      out.push(this.calculateMoneyFromData(tmp))
    }
    this.setState({ dailyData: out })
  }

  calculateMoneyFromData(arr) {
    var sum = 0
    arr.forEach(function(element) {
      sum+=element.money
    })
    return sum
  }

  getLastTenDayMoney() {
    let origin = this.getAllData()
    let dateString = [], out = []
    for (var i = 0; i < 10; i++) {
      let targetDate = new Date(new Date().setDate(todayDate.getDate()-i))
      let _date = targetDate.getDate();
      let _month = targetDate.getMonth() + 1;
      let _year = targetDate.getFullYear();
      let tmp = origin.filter(function(x) { return x.year === _year })
      tmp = tmp.filter(function(x) { return x.month === _month })
      tmp = tmp.filter(function(x) { return x.date === _date })
      // console.log(targetDate.yyyymmdd())
      // console.log(this.calculateMoneyFromData(tmp))
      dateString.push(targetDate.yyyymmdd())
      out.push(this.calculateMoneyFromData(tmp))
    }
    this.setState({ lastDateData: [dateString, out] })
  }

  render() {
    return (
      <section id="main-content">
        <section className="wrapper"><br />
          <h3><i className="fa fa-angle-right"></i> Visualization</h3>
          <div className="tab-pane" id="chartjs">

            <div className="row mt" style={{display: 'flex', justifyContent: 'center'}} >

              <Line
                title="最近十日消費變化"
                data={this.state.lastDateData}
                labelsName="# of money"
              />
            </div>

            <div className="row mt">
              <Bar
                title="本日消費類別比例"
                data={this.state.dailyData}
                labels={categories}
                labelsName="# of money"
              />
              <Pie
                title="本日消費類別比例"
                data={this.state.dailyData}
                labels={categories}
              />
            </div>


            <div className="row mt">
              <Bar
                title="本月消費類別比例"
                data={this.state.monthlyData}
                labels={categories}
                labelsName="# of money"
              />
              <Pie
                title="本月消費類別比例"
                data={this.state.monthlyData}
                labels={categories}
              />

            </div>

            <div className="row mt">
              <Bar
                title="累計消費類別比例"
                data={this.state.totallyData}
                labels={categories}
                labelsName="# of money"
              />
              <Pie
                title="累計消費類別比例"
                data={this.state.totallyData}
                labels={categories}
                labelsName="# of money"
              />

            </div>

          </div>
        </section><br />
      </section>
    );
  }
}

export default Graph;
