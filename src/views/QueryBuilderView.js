import React, { Component } from 'react';

class QueryBuilderView extends Component {
  // handleChange (e) {
  //   console.log('change state!')
  //   var newState = !this.props.completed
  //   this.props.onClick(newState);
  // },

  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="">
              <label className="col-form-label" for="query1">State</label>
              <input type="text" className="form-control" id="query1" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <label className="col-form-label" for="query2">HUB</label>
              <input type="text" className="form-control" id="query2" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <label className="col-form-label" for="query2">Freight Mode</label>
              <input type="text" className="form-control" id="query2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QueryBuilderView;
