import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/Actions'
import Store from '../store/store';
import ResultsView from '../views/ResultsView';

var Results = React.createClass({
  // connects this.state in component to this.data in store
  mixins: [ Reflux.connect(Store, "collection") ],

  getInitialState () {
    return Store.getDefaultData()
  },

  // changeCompleted (newState) {
  //   this.setState({
  //     completed: newState
  //   })
  //   Actions.updateTask(this.state);
  // },

  // best practice for iterating over objects in react

  render () {
    var collection = this.state[0]
    console.log('hello from results js')
    console.log(collection["Company"]);

    return (
      <div>
        <ResultsView
          // onClick={this.changeCompleted}
          company={collection["Company"]}
          state={collection["State"]}
        />
      </div>
    );
  }
})

export default Results;
