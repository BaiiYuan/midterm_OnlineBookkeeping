import React, { Component } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';

import Input from "../component/Input.js"
import { socket } from "../component/Header.js"

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

let categories = ["食物", "飲品", "交通", "娛樂", "其他"]


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: NaN,
      money: NaN,
      cat: "cat1",
      year: NaN,
      month: NaN,
      date: NaN,
    }

    this.updateRecord = this.updateRecord.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMoney = this.handleChangeMoney.bind(this);
    this.handleChangeCategories = this.handleChangeCategories.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  updateRecord() {
    // console.log(this.state)
    if (!this.state.name || !this.state.money || !this.state.year || !this.state.month || !this.state.date) {
      console.log("error")
      alert("There are some blank input or invalid input.")
    } else {
      socket.emit("input", {
        name: this.state.name,
        money: this.state.money,
        cat: this.state.cat,
        year: this.state.year,
        month: this.state.month,
        date: this.state.date,
      });
      this.props.history.push("/")
    }
  }

  handleChangeName(val) {
    if (val !== "") {
      this.setState({ name: val });
    } else {
      this.setState({ name: NaN });
    }
  }

  handleChangeMoney(val) {
    let out = Number(val)
    if (!isNaN(out) && val !== "") {
      this.setState({ money: out });
    } else {
      this.setState({ money: NaN });
    }
  }

  handleChangeDate(val) {
    val = val.split("-")
    let _year = Number(val[0])
    let _month = Number(val[1])
    let _date = Number(val[2])
    this.setState({ year: _year })
    this.setState({ month: _month })
    this.setState({ date: _date })
  }

  handleChangeCategories(e) {
    this.setState({ cat: e.target.value });
  }

  render() {
    return (
      <section id="main-content">
        <section className="wrapper"><br />
          <h3><i className="fa fa-angle-right"></i> Key-in Daily Account</h3>
          <div className="row mt">
              <div className="col-lg-12">
                  <div className="form-panel">
                      <h4 className="mb"><i className="fa fa-angle-right"></i> Today Date: {`${year}/${month<10?`0${month}`:`${month}`}/${date}`}</h4>
                      <form className="form-horizontal style-form" method="get">
                          <div className="form-group">
                            <label className="col-sm-2 col-sm-2 control-label">類別</label>
                            <div className="col-sm-10">
                              <select name="cats" onChange={ this.handleChangeCategories }>
                              　<option value="cat1">{categories[0]}</option>
                              　<option value="cat2">{categories[1]}</option>
                              　<option value="cat3">{categories[2]}</option>
                              　<option value="cat4">{categories[3]}</option>
                              　<option value="cat5">{categories[4]}</option>
                              </select>
                            </div>
                          </div>
                          <Input
                            id="input_name"
                            title="名稱"
                            type="text"
                            placeholder="Key-in name like 早餐 ... "
                            handleChange={this.handleChangeName}
                          />
                          <Input
                            id="input_money"
                            title="價錢"
                            type="text"
                            placeholder="Key-in number like 100 ... "
                            handleChange={this.handleChangeMoney}
                          />
                          <Input
                            id="input_day"
                            title="日期"
                            type="date"
                            placeholder=""
                            handleChange={this.handleChangeDate}
                          />
                          <button type="button" className="btn btn-default btn-lg btn-block" onClick={()=>this.updateRecord()}><i className="fa fa-check"></i> Add</button>
                      </form>
                  </div>
              </div>
            </div>
        </section>
      </section>
    );
  }
}

export default Add;
