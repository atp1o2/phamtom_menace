import React, { Component } from 'react';
import Masthead from './Masthead';

class Main extends Component {
  render () {
    return (
      <div>
        <Masthead/>
        <main className="container">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Main;
