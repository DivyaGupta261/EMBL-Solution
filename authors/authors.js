const Author   = require('./author');

var Authors = function () {
    this.authors = {};
};

Authors.prototype.setAuthors = function (authorArray, articleTitle){
  return ( authorArray
          .map((author) => this.setAuthor(author,articleTitle)));
};

Authors.prototype.setAuthor = function (newAuthor, articleTitle) {
  var authorForArticle = this.getAuthor(newAuthor);
  if(authorForArticle == undefined || authorForArticle.length < 1){
    authorForArticle = this.addAuthor(newAuthor,articleTitle);
  }
  return authorForArticle;
};

Authors.prototype.addAuthor = function (author,articleTitle) {
  var authorObj = this.createAuthor(author,articleTitle);
  this.authors[authorObj.getName()] = authorObj;
  return authorObj;
};

Authors.prototype.getAuthor = function (newAuthor) {
  return this.authors[(newAuthor.ForeName[0].replace("\t", ' ') + " " + newAuthor.LastName[0] + " " + newAuthor.Initials[0])]
};
Authors.prototype.createAuthor = function (author,articleTitle) {
  return new Author(author.ForeName[0].replace("\t", " "), author.LastName[0], author.Initials[0], articleTitle);
};

Authors.prototype.printAuthors = function () {
  console.log("\t\t"+ Object.keys(this.authors))
};

Authors.prototype.printCoAuthorsData = function () {
  var authors = this.authors;
  var string = Object.keys(authors)
                .reduce(((str,key) =>
                  str +
                  authors[key].getName() +
                  "\t" +
                  Object.keys(authors).reduce(((str1,coAuthorKey) =>
                      str1 +
                      getNumberOfArticles(authors[key],authors[coAuthorKey]) +
                      "\t"
                    ),"") + "\n"
                ),"");
                
    function getNumberOfArticles(author,coAuthor) {
      return author.getNoOfArticlesCoAuthored(coAuthor.getName());
    }
  console.log(string);
};

module.exports = Authors;
