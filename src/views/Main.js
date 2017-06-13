import React, { Component } from 'react';
import styled from 'styled-components';

const MainStyle = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 5rem;

  .main-border {
    border: 1px solid white;
    height: 100%;
    // background-color: rgba(185, 185, 185, 0.9);
    background: rgba(255,255,255,1);
    background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)));
    background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: -ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );
  opacity: 0.75;

  }
`;

class Main extends Component {
  render () {
    return (
      <div className="background-image">
        <MainStyle>
          <div className="main-border">
            {this.props.children}
          </div>
        </MainStyle>
      </div>
    );
  }
}

export default Main;
