import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var ResultsView = React.createClass({
  handlerClickCleanFiltered () {
    this.refs.Company.cleanFiltered();
    this.refs.State.cleanFiltered();
    this.refs.Hub.cleanFiltered();
    this.refs.FCL.cleanFiltered();
    this.refs.AirFreight.cleanFiltered();
    this.refs.LTL.cleanFiltered();
    this.refs.TL.cleanFiltered();
    this.refs.Linehaul.cleanFiltered();
  },

  render () {
    var collection = this.props.collection;
    var keys = this.props.keys;

    const selectRow = {
      mode: 'checkbox',
      bgColor: '#79c66b'
    };

    return (
      <div className='mb-5'>
        <div className='table-responsive'>
          <BootstrapTable ref='table' data={ collection } selectRow={ selectRow }>
            <TableHeaderColumn dataField='id' className='text-center' isKey={ true } width='75px'>
              ID<br/>
              <button className='btn btn-outline-primary btn-sm'><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear</a></button>
            </TableHeaderColumn>

            <TableHeaderColumn dataField='Company' ref='Company' dataSort={ true } filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }}>Company <span className='text-sm'>&#9662;</span></TableHeaderColumn>
            <TableHeaderColumn dataField='State' className='text-center' ref='State' dataSort={ true } filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='75px'>St <span className='text-sm'>&#9662;</span></TableHeaderColumn>
            <TableHeaderColumn dataField='Hub' ref='Hub' dataSort={ true } filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='200px'>HUB <span className='text-sm'>&#9662;</span></TableHeaderColumn>

            <TableHeaderColumn dataField='FCL' className='text-center' ref='FCL' filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='70px'>FCL</TableHeaderColumn>
            <TableHeaderColumn dataField='Air Freight' className='text-center' ref='AirFreight' filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='70px'>Air</TableHeaderColumn>
            <TableHeaderColumn dataField='LTL' className='text-center' ref='LTL' filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='70px'>LTL</TableHeaderColumn>
            <TableHeaderColumn dataField='TL' className='text-center' ref='TL' filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='70px'>TL</TableHeaderColumn>
            <TableHeaderColumn dataField='Linehaul' className='text-center' ref='Linehaul' filter={ { type: 'TextFilter', placeholder: '-', delay: 700 }} width='70px'>Line Haul</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
})

export default ResultsView;
