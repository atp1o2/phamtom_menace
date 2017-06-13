import React, { Component } from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
    text-align: center;
`;

export default class Blog extends Component {
  render () {
    return (
      <ViewStyle>
        <h1>Blog</h1>
      </ViewStyle>
    );
  }
}
