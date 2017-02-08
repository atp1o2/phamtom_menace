import React, { Component } from 'react';

class QueryFieldView extends Component {
  handleChange (e) {
    console.log('change state!')
    var newState = !this.props.completed
    this.props.onClick(newState);
  },

  render () {
    var task = this.props;
    return (
      <div>
        <h1>Query Field View</h1>
        <h2>{task.description}</h2>
        <button onClick={this.handleChange}>Complete</button>
        <h2>{task.completed.toString()}</h2>
      </div>
    );
  }
}

export default QueryFieldView;
