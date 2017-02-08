import React, { Component } from 'react';
import { Link } from 'react-router';

class MastheadView extends Component {
  render () {
    return (
      <div className="masthead">
        <div className="container">
          <div className="d-inline-flex">
            <img className="brand-logo" src="https://static.wixstatic.com/media/234003_7e0b776028ae441bb22bdaff2cd0bcfd~mv2.jpg/v1/fill/w_120,h_120,al_c,q_80,usm_0.66_1.00_0.01/234003_7e0b776028ae441bb22bdaff2cd0bcfd~mv2.webp"/>
          </div>
          <div className="mt-5 d-inline-flex float-md-right float-sm-none">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-muted vertical-divider" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted vertical-divider" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted vertical-divider" to="/Team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted vertical-divider" to="/Demo">Demo</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MastheadView;
