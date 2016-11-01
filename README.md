## Treehouse Technical Degree Project 1

####Tech:
- JavaScript
- HTML
- CSS

####Tools:
- WebStorm
- GitHub 

####Requirements:
- [x] Create an array of JavaScript objects to hold the data for your quotes. 
	- [x] Name the array quotes. 
	- [x] The quotes array should be accessible in the global scope.
Each quote object in the quotes array should have 
	- [x] A quote property which contains a string: the text of the quote that will be displayed on the page.
	- [x] A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
	- [x] An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." 
	- [x] If there is no known publication, do not include this property on the object.
	- [x] An optional year property which contains a number identifying the date of the quote. For example, 1997. 
	- [x] If there is no known date, then do not include this property on the object.
- [x] Create a function named getRandomQuote which:
	- [x] selects a random quote object from the quotes array
	- [x] returns the randomly selected quote object
- [x] Create a function named printQuote which follows these rules:
	- [x] printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	- [ ] printQuote constructs a string containing the different properties of the quote object using the following HTML template:
```
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
```
