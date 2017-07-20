import React, { Component } from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    text-align: center;
`;

export default class View1 extends Component {
  render () {
    return (
      <ViewStyle>
        <h1>View 1</h1>
        <hr />
      </ViewStyle>
    );
  }
}
