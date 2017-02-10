import React, { Component } from 'react';
import QueryBuilderView from '../views/QueryBuilderView';

class QueryField extends Component {
  // mixins: [
  //   Reflux.connect(Store, 'task')
  // ],

  // getInitialState () {
  //   return Store.getDefaultData()
  // },

  // changeCompleted (newState) {
  //   this.setState({
  //     completed: newState
  //   })
  //   Actions.updateTask(this.state);
  // },

  render () {
    return (
      <QueryBuilderView />
    )
  };
}

export default QueryField;
