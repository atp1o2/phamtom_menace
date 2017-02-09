import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/Actions'
import Store from '../store/store';
import ResultsView from '../views/ResultsView';

var Results = React.createClass({
  // connects this.state in component to this.data in store
  mixins: [ Reflux.connect(Store, "collection") ],

  getInitialState () {
    return Store.getDefaultData()
  },

// pass the collection to the view and let it handle the iteration
  render () {
    var collection = this.state
    // console.log('hello from results js')
    // console.log(collection);
    return (
      <div>
        <ResultsView collection={collection}/>
      </div>
    );
  }
})

export default Results;
