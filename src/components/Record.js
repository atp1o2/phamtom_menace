import React from 'react';
import RecordView from '../views/RecordView';
import Store from '../store/store';

var Record = React.createClass({
  getInitialState () {
    return {
      paramId: this.props.params.id,
      collection: Store.getDefaultData()
    }
  },

  findRecordById () {
    var record;
    var collection = this.state.collection;

    for (var i in collection) {
      if (collection[i].id === this.state.paramId) {
        record = collection[i];
      }
    }
    return record;
  },

  render () {
    return (
      <RecordView record={ this.findRecordById() } />
    );
  }
})

export default Record;
