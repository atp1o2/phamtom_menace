import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var ResultsView = React.createClass({
  render () {
    var collection = this.props.collection;
    var keys = this.props.keys;
    return (
      <div className="mb-5">
        <h1>Results View</h1>
        <div className="table-responsive">
          <BootstrapTable data={ collection }>
            <TableHeaderColumn dataField='id' isKey={ true }>id</TableHeaderColumn>
            {
              keys.map((key) =>
                <TableHeaderColumn dataField={key}>{key}</TableHeaderColumn>
              )
            }
          </BootstrapTable>
        </div>
      </div>
    );
  }
})

export default ResultsView;
