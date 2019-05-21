import React, { Component } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/style.css';

class MainRoot extends Component {
  handleChange = (e) => {
    this.props.handleChange(e.target.value)
  }
  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 col-sm-2 control-label">{this.props.title}</label>
        <div className="col-sm-10">
          <input
            id={this.props.id}
            type={this.props.type}
            className="form-control round-form"
            placeholder={this.props.placeholder}
            onChange={ this.handleChange }
          />
        </div>
      </div>
    )
  }
}
          // <span className="help-block">{this.props.helpText}</span>

export default MainRoot;

