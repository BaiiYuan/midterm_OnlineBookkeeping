import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'

import '../assets/css/bootstrap.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';

class Sidebar extends Component {
  render() {
    return (
      <aside>
          <div id="sidebar"  className="nav-collapse ">
            <ul className="sidebar-menu" id="nav-accordion">

              <p className="centered"><a href="profile.html"><img src="./img/ui-sam.jpg" className="img-circle" width="60"></img></a></p>
              <h5 className="centered">Online Book Keeping</h5>


              <li className="sub-menu">
                <NavLink to="/Home">
                  <i className="fa fa-desktop"></i>
                  <span>View All</span>
                </NavLink>
              </li>

              <li className="sub-menu">
                <NavLink to="/Add">
                  <i className="fa fa-book"></i>
                  <span>Add New</span>
                </NavLink>
              </li>

              <li className="sub-menu">
                <NavLink to="/Chart">
                  <i className="fa fa-bar-chart-o"></i>
                  <span>Chart</span>
                </NavLink>
              </li>

            </ul>
          </div>
      </aside>
    );
  }
}

export default Sidebar;
