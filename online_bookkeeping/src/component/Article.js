import React, { Component } from 'react';
// import { NavLink, Switch, Route } from 'react-router-dom'

import '../common-css/bootstrap.css';
import '../layout-1/css/styles.css';
import '../layout-1/css/responsive.css';

import Info from "./Info.js"

const blog_info = [
  {
    img_background: "images/ben-o-sullivan-382817.jpg",
    img_person:"images/icons8-team-355979.jpg",
    text:"How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    love_num:57,talk_num:6,see_num:138
  },
  {
    img_background: "images/marion-michele-330691.jpg",
    img_person:"images/icons8-team-355990.jpg",
    text:"How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    love_num:111,talk_num:712,see_num:9487
  },
  {
    img_background: "images/sarah-diniz-outeiro-407602.jpg",
    img_person:"images/averie-woodard-319832.jpg",
    text:"How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    love_num:57,talk_num:6,see_num:138
  },
  {
    img_background: "images/alex-lambley-205711.jpg",
    img_person:"images/averie-woodard-319832.jpg",
    text:"How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    love_num:57,talk_num:6,see_num:138
  },
  {
    img_background: "images/category-6-400x250.jpg",
    img_person:"images/icons8-team-355979.jpg",
    text:"How Did Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
    love_num:57,talk_num:6,see_num:138
  }
]

class Article extends Component {
  render() {
    return (
      <div>
        <Info blog_info = {blog_info} / >
        <a className="load-more-btn" href="#"><b>LOAD MORE</b></a>
      </div>
    );
  }
}

export default Article;
