var jsonData = require('../../scripts/data.json');
import $ from 'jquery';

var seed = jsonData;

function Record (data) {
  for (var prop in data) {
    this[prop] = data[prop]
  }
}

function createCollectionOfRecords (jsonData) {
  var collection = [];
  for (var obj in jsonData) {
    jsonData[obj].id = 10 + obj;
    collection.push(new Record (jsonData[obj]));
  }
  return collection;
}

function getCollection () {
  return createCollectionOfRecords(seed);
}


export { getCollection }
