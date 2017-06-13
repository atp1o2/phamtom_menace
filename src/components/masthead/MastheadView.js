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
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src={BrandLogo} alt="CareerScope-Logo"/></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <Link to="View1" className="mobile-hide">
              View1
            </Link>
            <Link to="View2" className="mobile-hide">
              View2
            </Link><Link to="View3" className="mobile-hide">
              View3
            </Link>
          </Nav>
        </Navbar>
      </Masthead>
    );
  }
}
