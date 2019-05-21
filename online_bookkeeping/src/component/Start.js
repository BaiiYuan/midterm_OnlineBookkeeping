import React, { Component } from 'react';
import { socket } from "../component/Header.js"

import Block from "../component/Block.js"

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

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.getTableData = this.getTableData.bind(this);
    this.getAllRecordData = this.getAllRecordData.bind(this);
    this.getMonthlyRecordData = this.getMonthlyRecordData.bind(this);
    this.getDailyRecordData = this.getDailyRecordData.bind(this);
    this.updateRecordData = this.updateRecordData.bind(this);
    setInterval(this.updateRecordData, 300);
  }

  updateRecordData() {
    socket.emit("request");
    socket.on("output", data => {
      data = data.sort(function(a, b) {return b.date - a.date;})
      data = data.sort(function(a, b) {return b.month - a.month;})
      data = data.sort(function(a, b) {return b.year - a.year;})
      this.setState({ data: data });
    });
  }

  handleDelete(id) {
    console.log(id)
    socket.emit("deleteByID", id);
  }

  getTableData(data) {
    return data.map((record, index) => {
      return (
        <tr key={record._id}>
          <td> {index+1} </td>
          <td> {cat_dict[record.cat]} </td>
          <td> {record.name} </td>
          <td> {record.money} </td>
          <td> {`${record.year}/${record.month<10?`0${record.month}`:`${record.month}`}/${record.date}`} </td>
          <td><button value={record._id} className="btn btn-danger btn-xs" onClick={()=>this.handleDelete(record._id)}><i className="fa fa-trash-o "></i></button></td>
        </tr>
      );
    });
  }

  getAllRecordData() {
    // console.log(this.state.data)
    return this.getTableData(this.state.data)
  }

  getMonthlyRecordData() {
    let tmp = this.state.data.filter(function(x) { return x.year === year })
    tmp = tmp.filter(function(x) { return x.month === month })
    return this.getTableData(tmp)
  }

  getDailyRecordData() {
    let tmp = this.state.data.filter(function(x) { return x.year === year })
    tmp = tmp.filter(function(x) { return x.month === month })
    tmp = tmp.filter(function(x) { return x.date === date })
    return this.getTableData(tmp)
  }

  render() {
    return (
      <section id="main-content">
        <section className="wrapper"><br />
          <h3><i className="fa fa-angle-right"></i> Home Page</h3>
          <div className="row mt">
            <Block
              title="Daily Cost"
              getData={this.getDailyRecordData()}
            />

            <Block
              title="Monthly Cost"
              getData={this.getMonthlyRecordData()}
            />

            <Block
              title="Totally Cost"
              getData={this.getAllRecordData()}
            />

          </div>
        </section><br />
      </section>
    );
  }
}

export default Start;
