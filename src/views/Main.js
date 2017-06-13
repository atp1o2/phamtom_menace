import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import SideNav from '../components/SideNav';
import Masthead from '../components/masthead/Masthead';

const MainStyle = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 5rem;

  .main-border {
    border: 1px solid #3498db;
    border-right: none;
    // border-radius: 15px;
    height: 90vh;
    // background-color: rgba(185, 185, 185, 0.9);
  }
  .nav-border {
    border: 1px solid #3498db;
    // border-radius: 15px;

    border-left: none;
    height: 90vh;
    // margin-top: -3rem;

  }
`;

class Main extends Component {
  render () {
    return (
      <div className="background-image">
        <MainStyle>
            <Row>
              <Col xs={12} sm={12} md={10} className="main-border background-gray-gradient">
                <Row>
                  <Col xs={12} mdHidden lgHidden className="background-gray-gradient">
                    <Masthead />
                  </Col>
                </Row>
                {this.props.children}
              </Col>
              <Col sm={2} xsHidden smHidden className="nav-border background-gray-gradient">
                <SideNav />
              </Col>
            </Row>

        </MainStyle>
      </div>
    );
  }
}

export default Main;
