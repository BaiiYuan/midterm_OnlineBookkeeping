import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Start from "../component/Start.js"
import Add from "../component/Add.js"
import Graph from "../component/Graph.js"

import '../assets/css/bootstrap.css'
import '../assets/font-awesome/css/font-awesome.css'
import '../assets/css/style.css'
import '../assets/css/style-responsive.css'

class Content extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/Home" component={Start} / >
          <Route exact path="/Add" component={Add} / >
          <Route exact path="/Chart" component={Graph} / >
          <Redirect from="/" to="/Home" / >
        </Switch>
      </section>
    );
  }
}

export default Content;
