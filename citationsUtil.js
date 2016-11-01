const MedLineCitation  = require('./medlineCitation');

var citationsUtil = function (medLineCitation) {
  var articles  = medLineCitation.MedlineCitationSet.Article;
  var citation = articles
                  .map((article) => {
                    return {
                      'title'       : article.ArticleTitle[0],
                      'authorList'  : article.AuthorList[0].Author
                    }
                  });
  
  return new MedLineCitation(citation);
};

module.exports = citationsUtil;
