## Treehouse Technical Degree Project 1

####Tech:
- JavaScript
- HTML
- CSS

####Tools:
- WebStorm
- GitHub 

####Requirements:
- [ ] Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.
Each quote object in the quotes array should have 
	- [ ] A quote property which contains a string: the text of the quote that will be displayed on the page.
	- [ ] A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
	- [ ] An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
	- [ ] An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
- [ ] Create a function named getRandomQuote which:
	- [ ] selects a random quote object from the quotes array
	- [ ] returns the randomly selected quote object
- [ ] Create a function named printQuote which follows these rules:
	- [ ] printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	- [ ] printQuote constructs a string containing the different properties of the quote object using the following HTML template:
```
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
```
