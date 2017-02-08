import React, { Component } from 'react';
import Reflux from 'reflux';
import Actions from '../actions/Actions'
import Store from '../store/store';
import SettingsView from '../views/SettingsView';

class Settings extends Component {
  // mixins: [
  //   Reflux.connect(Store, 'task')
  // ],

  // getInitialState () {
  //   return Store.getDefaultData();
  // },

  // changeCompleted (newState) {
  //   this.setState({
  //     completed: newState
  //   })
  //   Actions.updateTask(this.state);
  // },

  render () {
    return (
      <div>
        Settings
      </div>
    );
  }
}

export default Settings;
