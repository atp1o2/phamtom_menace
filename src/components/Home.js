import React, { Component } from 'react';
// import HomeView from '../views/HomeView';
import Results from '../components/Results';

class Index extends Component {
  render () {
    return (
      <div className="container pb-5 mb-5">
        <div className="row">
          <div className="col-12">
            <Results />
          </div>
        </div>
      </div>
    )
  };
}

export default Index;
