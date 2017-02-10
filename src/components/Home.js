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
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted text-sm"> Powered by <a href="https://facebook.github.io/react/" title="React.io">React</a>. Created by <a href="https://github.com/atp1o2/" title="Andrew's GitHub">Atp1o2</a></p>
          </div>
        </div>
      </div>
    )
  };
}

export default Index;
