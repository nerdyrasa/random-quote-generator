var quotes = [
  {
    quote: "No Grit, No Pearl.",
    source: "Anonymous",
    citation: null,
    year: null
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    citation: null,
    year: null
  }, {
    quote: "Fall seven times, stand up eight.",
    source: "Japanese Proverb",
    citation: null,
    year: null
  }, {
    quote: "Success is not final, failure is not fatal: it is" +
    " the courage to continue that counts.",
    source: "Winston Churchill",
    citation: null,
    year: null
  }, {
    quote: "There are seven days in the week and someday isn&#39t one of them.",
    source: "Anonymous",
    citation: null,
    year: null
  }, {
    quote: "The man who views the world at 50 the same as he did at 20 has wasted 30 years of his life.",
    source: "Muhammad Ali",
    citation: null,
    year: null
  }
];

var quoteId = 0;
var quoteIdsUsed = [];
var quote = '';
const NUMBER_OF_QUOTES = 6;

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

function formatQuote(stuff) {

  var formattedQuote =
    '<p class="quote">' + stuff.quote + '</p>' +
    '<p class="source">' + stuff.source +
      /* <span class="citation"> [citation here] </span>
       <span class="year"> [year here] </span> */
    '</p>';
  return formattedQuote;

}

function printQuote() {

  var quote = getRandomQuote();
  var formatted = formatQuote(quote);
  document.getElementById('quote-box').innerHTML = formatted;

}

printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

