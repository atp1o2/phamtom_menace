import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var ResultsView = React.createClass({
  handlerClickCleanFiltered() {
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
      mode: 'checkbox',  // multi select
      bgColor: '#79c66b'
    };


    return (
      <div className='mb-5'>
        <div className='table-responsive'>
          <BootstrapTable ref='table' data={ collection } selectRow={ selectRow }>

            <TableHeaderColumn dataField='id' className='text-center' isKey={ true } width='75px'>ID<br/><button className='btn btn-outline-primary btn-sm'><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } }>Clear</a></button></TableHeaderColumn>
            <TableHeaderColumn dataField='Company' ref='Company' filter={ { type: 'TextFilter', delay: 1000 }}>Company</TableHeaderColumn>
            <TableHeaderColumn dataField='State' ref='State' filter={ { type: 'TextFilter', placeholder: '...', delay: 1000 }} width='75px'>State</TableHeaderColumn>
            <TableHeaderColumn dataField='Hub' ref='Hub' filter={ { type: 'TextFilter', delay: 1000 }} width='200px'>HUB</TableHeaderColumn>
            <TableHeaderColumn dataField='FCL' ref='FCL' filter={ { type: 'TextFilter', placeholder: '...', delay: 1000 }} width='60px'>FCL</TableHeaderColumn>
            <TableHeaderColumn dataField='Air Freight' ref='AirFreight' filter={ { type: 'TextFilter', placeholder: '...', delay: 1000 }} width='60px'>Air</TableHeaderColumn>
            <TableHeaderColumn dataField='LTL' ref='LTL' filter={ { type: 'TextFilter', placeholder: '...', delay: 1000 }} width='60px'>LTL</TableHeaderColumn>
            <TableHeaderColumn dataField='TL' ref='TL' filter={ { type: 'TextFilter', placeholder: '...', delay: 1000 }} width='60px'>TL</TableHeaderColumn>
            <TableHeaderColumn dataField='Linehaul' ref='Linehaul' filter={ { type: 'TextFilter', placeholder: '...', delay: 1000 }} width='60px'>Line Haul</TableHeaderColumn>


          </BootstrapTable>
        </div>
      </div>
    );
  }
})

export default ResultsView;
