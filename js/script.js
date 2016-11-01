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
    quote: "I have not failed. I've just found 10,000 ways that won&#39;t work.",
    source: "Thomas A. Edison"
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

// CSS Color Names
// Compiled by @bobspace.
//
// A javascript array containing all of the color names listed in the CSS Spec.
// The full list can be found here: http://www.w3schools.com/cssref/css_colornames.asp
// Use it as you please, 'cuz you can't, like, own a color, man.
// I deleted colors that didn't provide sufficient contrast or seemed particularly grating.

var CSS_COLOR_NAMES = ["Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "FireBrick", "ForestGreen", "Fuchsia", "Green", "HotPink", "IndianRed", "Indigo", "Lime", "LimeGreen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "Pink", "Plum", "PowderBlue", "Purple", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SlateBlue", "SlateGray", "SlateGrey", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet"];

var quoteIndex = 0;
var colorIndex = 0;
var quotesUsed = [];
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
  quotesUsed = [];
  console.log("Emptied queue; Start fresh.")
}

function allQuotesUsed() {
  return (quotesUsed.length === NUMBER_OF_QUOTES);
}

function getRandomQuote() {

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

  colorIndex = getRandomIntInclusive(0, CSS_COLOR_NAMES.length - 1);
  return CSS_COLOR_NAMES[colorIndex];
}

function logQuoteToConsole(quoteIndex) {
  console.log(quoteIndex, ': ', quotes[quoteIndex].quote.slice(0, 20), ' Quotes used: ', quotesUsed);
}

function formatQuote(quote) {

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

  formattedQuote += '</p>';

  return formattedQuote;

}

function changeBackground() {

  var newColor = getRandomColor();
  document.getElementById("bgcolor").style.backgroundColor = newColor;
  console.log('change color ', newColor);
}

function printQuote() {


  document.getElementById('quote-box').innerHTML = formatQuote(getRandomQuote());
  changeBackground();

}

// seed the initial quote

printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
