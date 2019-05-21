import React, { Component } from 'react';
// import { NavLink, Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from "./Sidebar.js"
import { Header } from "../component/Header.js"
import Content from "./Content.js"

import '../assets/css/bootstrap.css';
import '../assets/css/style.css';

class MainRoot extends Component {
  render() {
    return (
      <BrowserRouter>
        <section id="container" >
          <Header />
          <Sidebar />
          <Content />
        </section>
      </BrowserRouter>
    )
  }
}

export default MainRoot;