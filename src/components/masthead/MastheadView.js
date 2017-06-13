import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import styled from 'styled-components';
import BrandLogo from '../../img/CareerScope-Logo.png';

const Masthead = styled.nav`
  height: auto;
  width: 98%;
  .container {
    width: 100%;
  }
  .navbar {
    box-shadow: none;
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
          <Nav pullRight>
            <Link to="/" className="mobile-hide">Home</Link>
            <Link to="Blog" className="mobile-hide">Blog</Link>
            <Link to="Panatural" className="mobile-hide">Panatural</Link>
            <Link to="Portfolio" className="mobile-hide">Portfolio</Link>
            <Link to="Wood" className="mobile-hide">Wood</Link>
            <Link to="About/Me" className="mobile-hide">About/Me</Link>
            <Link to="About/Work" className="mobile-hide">About/Work</Link>
            <Link to="Contact" className="mobile-hide">Contact</Link>
          </Nav>
        </Navbar>
      </Masthead>
    );
  }
}
