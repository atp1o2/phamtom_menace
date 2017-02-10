var jsonData = require('../../scripts/data.json');

var seed = jsonData;

function Record (data) {
  for (var prop in data) {
    this[prop] = data[prop]
  }
}

function createCollectionOfRecords (jsonData) {
  var collection = [];
  for (var obj in jsonData) {
    collection.push(new Record (jsonData[obj]));
  }
  return collection;
}

function getCollection () {
  return createCollectionOfRecords(seed);
}


export { getCollection }
