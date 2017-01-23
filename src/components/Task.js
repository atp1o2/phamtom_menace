import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/Actions'
import TaskStore from '../store/TaskStore';
import TaskView from '../views/TaskView';

const Task = React.createClass({
  mixins: [
    Reflux.connect(TaskStore, 'task')
  ],

  getInitialState () {
    return TaskStore.getDefaultData()
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
        <TaskView
          onClick={this.changeCompleted}
          description={this.state.description}
          completed={this.state.completed}
        />
      </div>
    );
  }
})

export default Task;
