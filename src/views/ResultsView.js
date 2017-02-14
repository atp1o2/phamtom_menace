import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router';

var ResultsView = React.createClass({
  handlerClickCleanFiltered () {
    this.refs.Company.cleanFiltered();
    this.refs.State.cleanFiltered();
    this.refs.Hub.cleanFiltered();
    this.refs.FCL.cleanFiltered();
    this.refs['Air Freight'].cleanFiltered();
    this.refs.LTL.cleanFiltered();
    this.refs.TL.cleanFiltered();
    this.refs.Linehaul.cleanFiltered();
  },

  render () {
    var collection = this.props.collection;
    var freightKeys = this.props.freightKeys;

    const selectRow = {
      mode: 'checkbox',
      bgColor: '#79c66b'
    };

    var formatLink = function(cell, row) {
      return (
        <Link to={"/Record/" + cell}>{cell}</Link>
      )
    };

    function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
      // fieldValue is column value
      // row is whole row object
      // rowIdx is index of row
      // colIdx is index of column
      return fieldValue === "Y" ? 'yes-green' : 'no-red';
    }

    return (
      <div className='mb-5'>
        <div className='table-responsive'>
          <BootstrapTable ref='table' data={ collection } selectRow={ selectRow }>
            <TableHeaderColumn dataField='id' className='text-center' dataFormat={ formatLink } isKey={ true } width='75px'>
              ID<br/>
              <button className='btn btn-outline-primary btn-sm'><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear</a></button>
            </TableHeaderColumn>

            <TableHeaderColumn dataField='Company' ref='Company' dataSort filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='375px'>Company <span className='text-sm'>&#9662;</span></TableHeaderColumn>

            <TableHeaderColumn dataField='State' className='text-center' ref='State' dataSort filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='100px'>St <span className='text-sm'>&#9662;</span></TableHeaderColumn>

            <TableHeaderColumn dataField='Hub' ref='Hub' dataSort filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='200px'>HUB <span className='text-sm'>&#9662;</span></TableHeaderColumn>

            {
              freightKeys.map((key) =>
                <TableHeaderColumn key={key} dataField={key} columnClassName={ columnClassNameFormat } className='text-center' ref={key} filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='70px'>{key}</TableHeaderColumn>
              )
            }
          </BootstrapTable>
        </div>
      </div>
    );
  }
})

export default ResultsView;
