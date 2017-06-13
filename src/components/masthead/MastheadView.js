import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import styled from 'styled-components';
import BrandLogo from '../../img/CareerScope-Logo.png';

const Masthead = styled.nav`
  height: auto;
  text-align: center;
  .container {
    width: 100%;
  }
  .navbar {
    box-shadow: none;
  }

  .navbar-default .navbar-nav>li>a {
    color: black;
  }
  img {
    max-height: 45px;
    max-width: 100%;
  }
  ul {
    margin-top: 3rem;
  }
  a {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 485px) {
    .mobile-hide {
      display: none;
    }
    text-align: center;
  }
`;

export default class MastheadView extends Component {
  render () {
    return (
      <Masthead>
        <Navbar>
          <Nav>
            <li><Link to="Blog">"Saturdays with Andy"</Link></li>
            <li><Link to="Panatural">Panatural</Link></li>
            <li><Link to="Wood">Woodshop</Link></li>
            <li><Link to="About/Me">Me</Link></li>
            <li><Link to="About/Work">Work</Link></li>
            <li><Link to="Contact">Contact</Link></li>
          </Nav>
        </Navbar>
        <hr />
      </Masthead>
    );
  }
}
