import jsonData from "./records";
// Need lodash?

// INPUT: excel sheet
// OUTPUT: json object with each record as an js hash object

// this records will be a script that loads the excel sheet
// use an excel -> json converter
// each row iteration will create a js class (object)
// these objects will be stored in a final json object to be returned

// for now:
// create a fake class
// return it as an object to store.js
var seed = [{"Company":"Calhoun Truck Lines","State":"MN","Hub":"Minneapolis","Service Area":null,"What they do for us now":"Drayage","Compliant ":"Y","Trucking App":"N","Type":"Email","Outlay?":"N","Outlay Limit":"","Outlay Details/Fees":null,"Rate Sheet":"Y","FCL":"Y","LCL / CFS":"N","Air Freight":"N","LTL":"N","TL":"N","Linehaul":"N","3PL warehouse":"N","Bonded":"N","TSA":"N","CTPAT":"","SVI #":"","HAZMAT":"Y","Contract":"Y","Credit":"Y","W9":"Y","Insurance ":"1/1/2018","US Dot":764739,"MC":201062,"No. Units":"20","FCL Dispatch Email":"mndispatch@calhountrucklines.com","LTL/Air Dispatch Email":"","Quoting Email":"","Contact Ph":"651 636 4877","FCL Rates":"FCL Rates","LCL/AIR Rates":"","Other":"","Billing Contact":null,"Management":"","Safety":null,"Other Contacts":"dclark@calhountrucklines.com","":null,"":null,"":null,"":null,"":null,"":null,"":null,"":null,"":null,"":null},
{"Company":"Calhoun Truck Lines","State":"IL","Hub":"Chicago","Service Area":null,"What they do for us now":"Drayage - Do not use","Compliant ":"N","Trucking App":"N","Type":"Email","Outlay?":"N","Outlay Limit":"","Outlay Details/Fees":null,"Rate Sheet":"Y","FCL":"Y","LCL / CFS":"N","Air Freight":"N","LTL":"N","TL":"N","Linehaul":"N","3PL warehouse":"N","Bonded":"N","TSA":"N","CTPAT":"","SVI #":"","HAZMAT":"Y","Contract":"Y","Credit":"Y","W9":"Y","Insurance ":"1/1/2018","US Dot":764739,"MC":201062,"No. Units":"20","FCL Dispatch Email":"Chicago@calhountrucklines.com","LTL/Air Dispatch Email":"","Quoting Email":"dtorres@calhountrucklines.com","Contact Ph":"815 725 7800","FCL Rates":"FCL Rates","LCL/AIR Rates":"","Other":"","Billing Contact":null,"Management":"","Safety":null,"Other Contacts":null,"":null,"":null,"":null,"":null,"":null,"":null,"":null,"":null,"":null,"":null}]


// constructor for creating record instances
function Record (data) {
  // need to add ID numbers
  for (var prop in data) {
    this[prop] = data[prop]
  }
}

// iterate over json blob
// create a record instance for each row
  // var collection = JSON.parse(jsonData) ????
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
