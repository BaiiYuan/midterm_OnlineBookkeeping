import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'

import '../common-css/bootstrap.css';
import '../layout-1/css/styles.css';
import '../layout-1/css/responsive.css';

class Header extends Component {
  render() {
    return (
        <header>
		      <div className="container-fluid position-relative no-side-padding">

		        <a href="https://colorlib.com/wp/template/bona/" className="logo"><img src="logo.png" alt="Logo Image" /></a>

		        <div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="ion-navicon"></i></div>

		        <ul className="main-menu visible-on-click" id="main-menu">
		          <li><NavLink to="/Home">Home</NavLink></li>
		          <li><NavLink to="/Article">Article</NavLink></li>
		          <li><NavLink to="/Profile">Profile</NavLink></li>
		        </ul>

		        <div className="src-area">
		          <form>
		            <button className="src-btn" type="submit" style={{paddingTop: "2px",}}><ion-icon name="search" size="small"></ion-icon></button>
		            <input className="src-input" type="text" placeholder="Type of search" />
		          </form>
		        </div>

		      </div>
		    </header>

    );
  }
}

export default Header;
