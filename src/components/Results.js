import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/Actions'
import Store from '../store/store';
import ResultsView from '../views/ResultsView';
import { freightKeys } from '../services/getKeys';

var Results = React.createClass({
  mixins: [ Reflux.connect(Store, "collection") ],

  getInitialState () {
    return Store.getDefaultData()
  },

  componentWillMount () {
    this.setState({
      freightKeys: freightKeys()
    })
  },

  objectifyCollection () {
    var collection = []
    for (var i in this.state) {
      collection.push(this.state[i])
    }
    return collection;
  },

  render () {
    var collection = this.objectifyCollection();
    var freightKeys = this.state.freightKeys;
    return (
      <div>
        <ResultsView
          collection={collection}
          freightKeys={freightKeys}
        />
      </div>
    );
  }
})

export default Results;
