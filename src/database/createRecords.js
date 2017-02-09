import { Seed } from "./database";
// Need lodash?

// INPUT: excel sheet
// OUTPUT: json object with each record as an js hash object

// this records will be a script that loads the excel sheet
// use an excel -> json converter
// each row iteration will create a js class (object)
// these objects will be stored in a final json object to be returned

var seed = Seed

// constructor for creating record instances
function Record (data) {
  // need to add ID numbers
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
