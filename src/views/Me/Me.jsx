import React, { Component } from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    text-align: center;
`;

export default class Me extends Component {
  render () {
    return (
      <ViewStyle>
        <h1>Me</h1>
      </ViewStyle>
    );
  }
}
