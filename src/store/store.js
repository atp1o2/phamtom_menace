import Reflux from 'reflux';
import Actions from '../actions/Actions'
import { getCollection } from '../database/createRecords'

// Task component should pick up initial states from store
// After MongoDB: store should pick up states from db
// Store needs to update db onChange

let collection = getCollection();

var Store = Reflux.createStore({
  listenables: Actions,

  data: {},

  init () {
    Actions.loadData()
  },

  onLoadData (result) {
    this.data = result;
    this.trigger(this.data);
  },

  // this is where updating the database stuff goes
  // state isn't persistent in localStorage atm
  // onUpdateTask (data) {
  //   localStorage.setItem('record', loadData);
  //   this.record = data;
  //   this.trigger(record); // sends the updated list to all listening components (TodoApp)
  // },

  getDefaultData () {
    return collection;
  }
});

export default Store;
