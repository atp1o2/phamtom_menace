import React from 'react';

const TaskView = React.createClass({
  handleChange (e) {
    console.log('change state!')
    var newState = !this.props.completed
    this.props.onClick(newState);
  },

  render () {
    var task = this.props;
    return (
      <div>
        <h2>{task.description}</h2>
        <button onClick={this.handleChange}>Complete</button>
        <h2>{task.completed.toString()}</h2>
      </div>
    );
  }
})

export default TaskView;
