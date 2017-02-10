if(typeof require !== 'undefined') xlsx = require('xlsx');
var jsonfile = require('jsonfile');

var workbook = xlsx.readFile('../src/database/*.xlsx');
var worksheet = workbook.Sheets[workbook.SheetNames[0]];
/* get the range */
var range = xlsx.utils.decode_range(worksheet['!ref']);
/* skip n rows */
range.s.r += 2;
if(range.s.r >= range.e.r) range.s.r = range.e.r;
/* update range */
worksheet['!ref'] = xlsx.utils.encode_range(range);
/* create json obj */
const jsonSheet = xlsx.utils.sheet_to_json(worksheet, {blankValue: true})

var file = './data.json';
var obj = jsonSheet;

var writeJson = function () {
  jsonfile.writeFileSync(file, obj)
}

exports.jsonSheet = jsonSheet

// TODO
// Make writeJson() run automatically from another build script
