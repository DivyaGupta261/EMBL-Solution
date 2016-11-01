var fs     = require('fs');
var xml2js = require('xml2js');

const highland = require('highland');

const MedLineCitation  = require('./medLineCitation');
const citationsUtil    = require('./citationsUtil');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/articles.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
       var citationData = citationsUtil(result);
       citationData.printCoAuthorsData();
    });
});
