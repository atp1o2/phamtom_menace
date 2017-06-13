import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import styled from 'styled-components';

const SideNavStyle = styled.nav`

  ul {
    list-style: none;
    padding-left: 3rem;
    line-height: 4rem;
  }
  ul > li {
    font-size: 1.5rem;
  }
`;

export default class SideNav extends Component {
  render () {
    return (
      <SideNavStyle>
        <ul>
          <li><Link to="Blog">"Saturdays with Andy"</Link></li>
          <li><Link to="Panatural">Panatural</Link></li>
          <li><Link to="Wood">Woodshop</Link></li>
          <hr />
          <li><Link to="About/Me">Me</Link></li>
          <li><Link to="About/Work">Work</Link></li>
          <li><Link to="Contact">Contact</Link></li>
        </ul>
      </SideNavStyle>
    );
  }
}
