const Authors   = require('./authors/authors');
const Articles  = require('./articles/articles');

var MedLineCitation = function (medLineCitations) {
  this.citations  = medLineCitations;
  this.authors    = new Authors();
  this.articles   = new Articles(medLineCitations,this.authors);
};

MedLineCitation.prototype.printCoAuthorsData = function () {
  this.authors.printAuthors();
  this.authors.printCoAuthorsData();
};

module.exports = MedLineCitation;
