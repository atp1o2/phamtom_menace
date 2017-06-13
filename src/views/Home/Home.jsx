import React, { Component } from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    text-align: center;
`;

export default class Home extends Component {
  render () {
    return (
      <ViewStyle>
        <h1>Home</h1>
      </ViewStyle>
    );
  }
}
