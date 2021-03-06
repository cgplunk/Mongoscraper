var request = require("request");
var cheerio = require("cheerio");


var scrape = function() {
  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
    var articles = [];

    $(".theme-summary").each(function(i, element) {

      var head = $(this).children(".story-heading").text().trim();

      var sum = $(this).children(".summary").text().trim();

      if (head && sum) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();


        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;