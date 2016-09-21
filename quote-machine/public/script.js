function getNewQuote(json) {
  var quote = json.quoteText;
  var author = json.quoteAuthor;
  var tweet =  encodeURIComponent(quote +"\n" + "- " + author);
  $("#quoteMain").html(quote);
  $("#quoteSig").html("- " + author);
  $("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
}

$(document).ready(function() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=getNewQuote",
      dataType: "jsonp",
      jsonpCallback: "getNewQuote"
    });
  $("#new-quote").on("click", function () {
    $(this).blur();
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=getNewQuote",
      dataType: "jsonp",
      jsonpCallback: "getNewQuote"
    });
  });
});