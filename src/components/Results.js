import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/Actions'
import Store from '../store/store';
import ResultsView from '../views/ResultsView';

var Results = React.createClass({
  mixins: [ Reflux.connect(Store, "collection") ],

  getInitialState () {
    return Store.getDefaultData()
  },

  formatCollection () {
    var collection = []
    for (var i in this.state) {
      this.state[i].id = 10 + i;
      collection.push(this.state[i])
    }
    return collection;
  },

  formatKeys () {
    // all keys
    return Object.keys(this.state[0]);

    // desired keys
    // var keys = ["Company", "State", "Hub", "What they do for us now", "Trucking app", "Tracking type", "FCL", "LCL", "CFS", "Air freight", "LTL", "TL", "Line haul", "FCL dispatch email", "LTL/Air dispatch email", "Quoting email", "Contact ph", "FCL rates", "LCL/AIR rates", "Other"]

    // sample keys
    // return ["Company", "State", "Hub", "What they do for us now"]
  },

  render () {
    var collection = this.formatCollection();
    var keys = this.formatKeys();

    return (
      <div>
        <ResultsView
          collection={collection}
          keys={keys}
        />
      </div>
    );
  }
})

export default Results;
