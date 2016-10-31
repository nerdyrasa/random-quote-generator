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
    quote: "There are seven days in the week and someday isn’t one of them.",
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

function getRandomQuote() {
  // Ultimately I'll need to select a random quote object from the quotes array
  // For now,just cycle through the quotes

  var quote = quotes[quoteId];
  quoteId++;
  if (quoteId === 6) {
    quoteId = 0;
  }
  // Return the randomly selected quote object
  return quote;
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
  // Get a quote
  var quote = getRandomQuote();

  // format the
  var formatted = formatQuote(quote);

  // Display the quote
  document.getElementById('quote-box').innerHTML = formatted;

}



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

