var quotes = [
  {
    quote: "No Grit, No Pearl.",
    source: "Anonymous",
    tags: ["Grit", "Determination", "Success"]
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    tags: ["Just Do It", "Sports"]
  },
  {
    quote: "Fall seven times, stand up eight.",
    source: "Japanese Proverb",
    tags: ["Determination", "Grit"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won&#39;t work.",
    source: "Thomas A. Edison",
    tags: ["Perserverance", "Innovation"]
  },
  {
    quote: "Done is better than perfect.",
    source: "Sheryl Sandberg",
    tags: ["Just Do It", "Tech"]
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "First Inaugural Address",
    year: 1933,
    tags: ["Courage", "Politics"]
  }
];

// CSS Color Names
// Compiled by @bobspace.
//
// A javascript array containing all of the color names listed in the CSS Spec.
// The full list can be found here: http://www.w3schools.com/cssref/css_colornames.asp
// Use it as you please, 'cuz you can't, like, own a color, man.
// I deleted colors that didn't provide sufficient contrast or seemed particularly grating.

var CSS_COLOR_NAMES = ["Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "FireBrick", "ForestGreen", "Fuchsia", "Green", "HotPink", "IndianRed", "Indigo", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "Pink", "Plum", "PowderBlue", "Purple", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SlateBlue", "SlateGray", "SlateGrey", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet"];

var quoteIndex = 0;
var quotesUsed = [];
var intervalID;

// const keyword is not supported in IE
var NUMBER_OF_QUOTES = 6;
var CHANGE_INTERVAL = 20000;

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!

function getRandomIntInclusive(min, max) {
  "use strict";

  // http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
  // The parameters passed in, min and max, are scoped to the function, so
  // that is why they aren't declared below as var min and var max.

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emptyQuotesArray() {
  "use strict";
  quotesUsed = [];

  console.log("Emptied queue; Start fresh.");
}

function allQuotesUsed() {
  "use strict";
  return (quotesUsed.length === NUMBER_OF_QUOTES);
}

function getRandomQuote() {
  "use strict";
  do {

    quoteIndex = getRandomIntInclusive(0, 5);

  } while (quotesUsed.includes(quoteIndex));

  quotesUsed.push(quoteIndex);

  logQuoteToConsole(quoteIndex);

  if (allQuotesUsed()) {
    emptyQuotesArray();
  }

  return quotes[quoteIndex];
}

function getRandomColor() {
  "use strict";
  return CSS_COLOR_NAMES[getRandomIntInclusive(0, CSS_COLOR_NAMES.length - 1)];
}

function logQuoteToConsole(quoteIndex) {
  "use strict";
  console.log(quoteIndex, ': ', quotes[quoteIndex].quote.slice(0, 20));
}

function formatQuote(quote) {
  "use strict";
  var formattedQuote =
    '<p class="quote">' + quote.quote + '</p>' +
    '<p class="source">' + quote.source;

  // http://stackoverflow.com/questions/27509/detecting-an-undefined-object-property

  if (typeof quote.citation !== "undefined") {
    formattedQuote += '<span class="citation">' + quote.citation + '</span>';
  }
  if (typeof quote.year !== "undefined") {
    formattedQuote += '<span class="year">' + quote.year + '</span>';
  }
  if (typeof quote.tags !== "undefined") {
    formattedQuote += '<p class="tags">' + quote.tags.join(', ') + '</p>';
  }

  formattedQuote += '</p>';
  return formattedQuote;

}

function changeBackground() {
  "use strict";
  document.getElementById("bgcolor").style.backgroundColor = getRandomColor();

}

// It was awkward if I pressed the button then 2 seconds later the quote would change if 20 seconds happened to
// be up. It seems better to reset the interval with each button click.

function resetTimer() {
  "use strict";
  if (intervalID) {
    window.clearInterval(intervalID);
    intervalID = setInterval(printQuote, CHANGE_INTERVAL);
  }

}

function printQuote() {
  "use strict";
  resetTimer();
  document.getElementById('quote-box').innerHTML = formatQuote(getRandomQuote());
  changeBackground();

}

// seed the initial quote
printQuote();

// set the interval to change the quote to the defined interval
intervalID = window.setInterval(printQuote, CHANGE_INTERVAL);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

