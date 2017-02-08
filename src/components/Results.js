import React, { Component } from 'react';
import Reflux from 'reflux';
import Actions from '../actions/Actions'
import Store from '../store/store';
import ResultsView from '../views/ResultsView';

class Results extends Component {
  mixins: [
    Reflux.connect(Store, 'task')
  ],

  getInitialState () {
    return Store.getDefaultData()
  },

  changeCompleted (newState) {
    this.setState({
      completed: newState
    })
    Actions.updateTask(this.state);
  },

  render () {
    return (
      <div>
        <ResultsView
          onClick={this.changeCompleted}
          description={this.state.description}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

export default Results;
