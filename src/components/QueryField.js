import React, { Component } from 'react';
import QueryFieldView from '../views/QueryFieldView';

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
      <QueryFieldView />
    )
  };
}

export default QueryField;
