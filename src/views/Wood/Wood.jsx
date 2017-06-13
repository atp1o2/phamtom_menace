import React, { Component } from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    text-align: center;
`;

export default class Wood extends Component {
  render () {
    return (
      <ViewStyle>
        <h1>Wood</h1>
      </ViewStyle>
    );
  }
}
