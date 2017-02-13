import React, { Component } from 'react';

class RecordView extends Component {


  render () {
  console.log(this.props.record)
    return (
      <div className="container">
        record view
        <p>The id is {this.props.record.id}</p>
      </div>
    );
  }
}

export default RecordView;
