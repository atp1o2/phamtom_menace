import React from 'react';

var ResultsView = React.createClass({
  handleChange (e) {
    console.log('change state!')
    var newState = !this.props.completed
    this.props.onClick(newState);
  },

  render () {
    var record = this.props;
    return (
      <div>
        <h1>Results View</h1>
        <p>{record.company}</p>
        <p>{record.state}</p>
      </div>
    );
  }
})

export default ResultsView;
