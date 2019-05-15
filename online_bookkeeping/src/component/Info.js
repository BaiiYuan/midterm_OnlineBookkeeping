import React, { Component } from 'react';

import '../common-css/bootstrap.css';
import '../layout-1/css/styles.css';
import '../layout-1/css/responsive.css';

class Info extends Component
{
	render()
	{
		return (
			<div className="row">
			{this.props.blog_info.map(e =>
					<div className="col-lg-4 col-md-6"><div className="card h-100"><div className="single-post post-style-1">
						<div className="blog-image"><img src={e["img_background"]} alt="Blog Image"/></div>
						<a className="avatar" href="#"><img src={e["img_person"]} alt="Profile Image"/></a>
						<div className="blog-info">
							<h4 className="title"><a href="#"><b>{e["text"]}</b></a></h4>
							<ul className="post-footer">
								<li><a href="#" className="ion-icon-a"><ion-icon name="heart"></ion-icon> {e["love_num"]}</a></li>
								<li><a href="#" className="ion-icon-a"><ion-icon name="chatboxes"></ion-icon> {e["talk_num"]}</a></li>
								<li><a href="#" className="ion-icon-a"><ion-icon name="eye"></ion-icon> {e["see_num"]}</a></li>
							</ul>
						</div>
					</div></div></div>
				)
			}
			</div>
		)
	}
}


export default Info;
