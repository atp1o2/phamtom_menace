import React, { Component } from 'react';
import { Link } from 'react-router';

class MastheadView extends Component {
  render () {
    return (
      <div className="masthead">
        <div className="container">
          <div className="d-inline-flex">
            <img className="brand-logo mt-5" src="https://lh6.googleusercontent.com/9DtpY1GXXCn4VtiKDk1VqI6-xJ8P-Y29kU0E-FuEscpKZMtAhO3mNhKt-IcQpDYPDxSbXuFm92Kg1reM5ywqtIuyvzIF_g0PxxlEPfZBj8VCkoanXd_atfF5iKfIfxIACQzUWMyt"/>
          </div>
          <div className="mt-5 d-inline-flex float-md-right float-sm-none">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/Settings">Settings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MastheadView;
