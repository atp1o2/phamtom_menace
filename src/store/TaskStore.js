import Reflux from 'reflux';
import Actions from '../actions/Actions'

// Task component should pick up initial states from store
// After MongoDB: store should pick up states from db
// Store needs to update db onChange

let task = {
  description: 'learn reflux',
  completed: false
}

var store = Reflux.createStore({
  listenables: Actions,

  // this is where updating the database stuff goes
  // state isn't persistent in localStorage atm
  onUpdateTask (updatedTask) {
    localStorage.setItem('task', updatedTask);
    this.task = updatedTask;
    this.trigger(task); // sends the updated list to all listening components (TodoApp)
  },

  getDefaultData () {
    return task;
  }
});

export default store;
