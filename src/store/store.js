import Reflux from 'reflux';
import Actions from '../actions/Actions'
import { getCollection } from '../database/getCollection'

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

  getDefaultData () {
    return collection;
  }
});

export default Store;
