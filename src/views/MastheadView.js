import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from 'react-router';

class MastheadView extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Habitual</h2>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/About">About</Link></button>
        </div>
      </div>
    );
  }
}

export default MastheadView;
