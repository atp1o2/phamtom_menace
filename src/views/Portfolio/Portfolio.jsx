import React, { Component } from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    text-align: center;
`;

export default class Portfolio extends Component {
  render () {
    return (
      <ViewStyle>
        <h1>Portfolio</h1>
      </ViewStyle>
    );
  }
}
