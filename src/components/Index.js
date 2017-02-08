import React, { Component } from 'react';
import IndexView from '../views/IndexView';
import QueryField from '../components/QueryField';
import Results from '../components/Results';

class Index extends Component {
  render () {
    return (
      <div>
        <div className="home row pb-5 mb-5 ">
          <div className="col-12">
            <IndexView />
            <QueryField />
          </div>
        </div>

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
