import React, { Component } from 'react';

class QueryFieldView extends Component {
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
              <label className="col-form-label" for="query1">Query 1</label>
              <input type="text" className="form-control" id="query1" placeholder="query 1" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <label className="col-form-label" for="query2">Query 2</label>
              <input type="text" className="form-control" id="query2" placeholder="query 2" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <label className="col-form-label" for="query2">Query 3</label>
              <input type="text" className="form-control" id="query2" placeholder="query 3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QueryFieldView;
