
var Author = function (foreName , lastName, initials, articleTitle) {
    var foreName = foreName;
    var lastName = lastName;
    var initials = initials;
    this.name     = foreName + " " + lastName + " " + initials;
    this.coAuthoredArticles = {};
};

Author.prototype.addCoAuthors = function (coAuthors,articleTitle) {
  coAuthors.forEach((coAuthor)=>{
      var coAuthorName = coAuthor.getName();
      if(this.coAuthoredArticles[coAuthorName] != undefined){
        this.coAuthoredArticles[coAuthorName].push(articleTitle);
      }else{
        this.coAuthoredArticles[coAuthorName] = [];
        this.coAuthoredArticles[coAuthorName].push(articleTitle);
      }
  });
};

Author.prototype.getCoAuthorsData = function () {
  return this.coAuthoredArticles;
};

Author.prototype.getName = function () {
  return this.name;
};

Author.prototype.getNoOfArticlesCoAuthored = function (coAuthor) {
  return this.coAuthoredArticles[coAuthor] ? this.coAuthoredArticles[coAuthor].length : 0;
};

module.exports = Author;
