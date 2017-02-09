import { Seed } from "./database";

var seed = Seed

function Record (data) {
  for (var prop in data) {
    this[prop] = data[prop]
  }
}

function createCollection (jsonData) {
  var collection = [];
  for (var obj in jsonData) {
    collection.push(new Record (jsonData[obj]));
  }
  return collection;
}

function getCollection () {
  return createCollection(seed);
}


export { getCollection }
