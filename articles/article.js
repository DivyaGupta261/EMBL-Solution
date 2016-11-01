const Author  = require('../authors/author');

var Article = function (title , authorList) {
    this.title = title;
    this.authorList = authorList;
    this.setCoAuthorsData(authorList,title);
};

Article.prototype.setCoAuthorsData = function (authorList,title) {
  authorList.forEach((author,index,authorsList) => {
    author.addCoAuthors(authorsList,title);
  });
};

module.exports = Article;
