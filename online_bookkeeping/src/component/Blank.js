import React, { Component } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/style.css';
import '../assets/css/style-responsive.css';


class Blank extends Component {
  render() {
    return (
      <section id="main-content">
        <section class="wrapper site-min-height">
          <h3><i class="fa fa-angle-right"></i> Blank Page</h3>
          <div class="row mt">
            <div class="col-lg-12">
            <p>Place your content here.</p>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Blank;
