import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Blank from "../component/Blank.js"
import Profile from "../component/Blank.js"
import Home from "../component/Blank.js"

import '../assets/css/bootstrap.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';

class Content extends Component {
  render() {
    return (
      <section id="main-content">
        <Switch>
          <Route exact path="/Home" component={Blank} / >
          <Route exact path="/Add" component={Blank} / >
          <Route exact path="/Chart" component={Blank} / >
          <Redirect from="/" to="/Home" / >
        </Switch>
      </section>
    );
  }
}

export default Content;
