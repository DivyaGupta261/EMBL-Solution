const Article = require('./article');

var Articles = function (citations,authors) {
    this.articles = this.createArticles(citations,authors);
};

Articles.prototype.createArticles = function (citations,authors) {
  return citations.map((article) => {
          this.createArticle(article.title,authors.setAuthors(article.authorList,article.title))
      });
};

Articles.prototype.createArticle = function (title,authorList) {
  return new Article(title, authorList);
};

module.exports = Articles;
