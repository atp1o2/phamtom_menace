import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import styled from 'styled-components';
import BrandLogo from '../../img/leaf-logo.png';

const Masthead = styled.nav`
  height: 10rem;
  width: 100%;
  .nav {
    float: right;
    display: inline-block;
  }
  img {
    max-height: 45px;
    max-width: 100%;
  }
  a {
    margin: 0 1rem;
  }
`;

export default class MastheadView extends Component {
  render () {
    return (
      <Masthead>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src={BrandLogo} alt="Company Logo"/><h2>Twigs Inc.</h2></a>
            </Navbar.Brand>
            <Nav className="mt-5">
              <Link to="View1" className="text-sm-center">View1</Link>
              <Link to="View2" className="text-sm-center">View2</Link>
              <Link to="View3" className="text-sm-center">View3</Link>
            </Nav>
          </Navbar.Header>

        </Navbar>
      </Masthead>
    );
  }
}
