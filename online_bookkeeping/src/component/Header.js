import React, { Component } from 'react';
// import { NavLink, Switch, Route } from 'react-router-dom'
import socketIOClient from "socket.io-client";

import '../assets/css/bootstrap.css'
import '../assets/font-awesome/css/font-awesome.css'
import '../assets/css/style.css'
import '../assets/css/style-responsive.css'

var socket;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:3001/"
    };

    socket = socketIOClient(this.state.endpoint);
  }
  render() {
    return (
      <header className="header black-bg">
        <div className="sidebar-toggle-box">
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
        </div>
        <a href="index.html" className="logo"><b>Web Programming 2019</b></a>
      </header>
    );
  }
}

export {Header, socket};
