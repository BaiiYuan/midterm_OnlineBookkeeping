import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'

import '../common-css/bootstrap.css';
import '../layout-1/css/styles.css';
import '../layout-1/css/responsive.css';

class Footer extends Component {
  render() {
    return (
        <footer>

			    <div className="container">
			      <div className="row">

			        <div className="col-lg-4 col-md-6">
			          <div className="footer-section">

			            <a className="logo" href="#"><img src="logo.png" alt="Logo Image" /></a>
			            <p className="copyright">Bona @ 2017. All rights reserved.</p>
			            <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
			            <ul className="icons">
			              <li><a href="#" style={{paddingTop: "2px",}}><ion-icon name="logo-facebook"></ion-icon></a></li>
			              <li><a href="#" style={{paddingTop: "2px",}}><ion-icon name="logo-twitter"></ion-icon></a></li>
			              <li><a href="#" style={{paddingTop: "2px",}}><ion-icon name="logo-instagram"></ion-icon></a></li>
			              <li><a href="#" style={{paddingTop: "2px",}}><ion-icon name="logo-github"></ion-icon></a></li>
			              <li><a href="#" style={{paddingTop: "2px",}}><ion-icon name="logo-pinterest"></ion-icon></a></li>
			            </ul>

			          </div>
			        </div>

			        <div className="col-lg-4 col-md-6">
			            <div className="footer-section">
			            <h4 className="title"><b>CATAGORIES</b></h4>
			            <ul>
			              <li><a href="#">BEAUTY</a></li>
			              <li><a href="#">HEALTH</a></li>
			              <li><a href="#">MUSIC</a></li>
			            </ul>
			            <ul>
			              <li><a href="#">SPORT</a></li>
			              <li><a href="#">DESIGN</a></li>
			              <li><a href="#">TRAVEL</a></li>
			            </ul>
			          </div>
			        </div>

			        <div className="col-lg-4 col-md-6">
			          <div className="footer-section">

			            <h4 className="title"><b>SUBSCRIBE</b></h4>
			            <div className="input-area">
			              <form>
			                <input className="email-input" type="text" placeholder="Enter your email" />
			                <button className="submit-btn" type="submit"><ion-icon name="mail" style={{fontSize: "20px",}}></ion-icon></button>
			              </form>
			            </div>

			          </div>
			        </div>

			      </div>
			    </div>
			  </footer>

    );
  }
}

export default Footer;
