var quotes = [
  {
    quote: "No Grit, No Pearl.",
    source: "Anonymous"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky"
  },
  {
    quote: "Fall seven times, stand up eight.",
    source: "Japanese Proverb"
  },
  {
    quote: "Don&#39;t let the noise of other&#39;s&#39; opinions drown out your own inner voice.",
    source: "Steve Jobs",
    citation: "Stanford University Commencement Speech",
    year: 2005
  },
  {
    quote: "Done is better than perfect.",
    source: "Sheryl Sandberg"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "First Inaugural Address",
    year: 1933
  }
];

var quoteId = 0;
var quoteIdsUsed = [];
var quote = '';

// const keyword is not supported in IE
var NUMBER_OF_QUOTES = 6;

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emptyQuotesArray() {
  quoteIdsUsed = [];
}

function allQuotesUsed() {
  return (quoteIdsUsed.length === NUMBER_OF_QUOTES);
}

function getRandomQuote() {

  do {

    quoteId = getRandomIntInclusive(0, 5);

  } while (quoteIdsUsed.includes(quoteId));

  quoteIdsUsed.push(quoteId);

  if (allQuotesUsed()) {
    emptyQuotesArray();
  }
  return quotes[quoteId];
}

function formatQuote(quote) {

  console.log(typeof quote.citation === "undefined");

  var formattedQuote =
    '<p class="quote">' + quote.quote + '</p>' +
    '<p class="source">' + quote.source;

  if (typeof quote.citation !== "undefined") {
    formattedQuote += '<span class="citation">' + quote.citation + '</span>';
  }

  if (typeof quote.year !== "undefined") {
    formattedQuote += '<span class="year">' + quote.year + '</span>';
  }

  formattedQuote += '</p>';

  return formattedQuote;

}

function printQuote() {

  document.getElementById('quote-box').innerHTML = formatQuote(getRandomQuote());

}

// seed the initial quote
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
