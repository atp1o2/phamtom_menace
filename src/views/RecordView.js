import React, { Component } from 'react';
import { Link } from 'react-router';

class RecordView extends Component {
  render () {
    var record = this.props.record;
    var keys = this.props.keys;
    var tableData = []

    for (var i in keys) {
      if (this[i] !== 0) {
        tableData.push(
          <tr>
            <td key={i}><b>{keys[i]}</b></td>
            <td>{record[keys[i]]}</td>
          </tr>
        );
      }
    }

    return (
      <div className="container">
        <div>
          <button className="btn btn-outline-primary my-4"><Link to="/">Back to List</Link></button>
        </div>
        <table className="table">
          {tableData}
        </table>
      </div>
    );
  }
}

export default RecordView;
