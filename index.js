let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';


// checks the word count of the array
let count = 0;
const loop = storyWords.forEach((word) => {
  return count++;
});
console.log(count)

// checks if there is a misspelled word in the array and replaces it
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful' : word;
});

// finds the index of badWord
badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
storyWords[badWordIndex] = 'really'; // changes badWord to 'really'

// checks if every word is longer than 10 characters
// if lengthCheck returns true then all characters are less than 10
// if at least one word is greater than 10 characters then it will return false
const lengthCheck = storyWords.every((word) => {
  return word.length < 10;
});

// finds the word that is greater than 10 characters and returns the word so it can be manually changed
let tooLong = storyWords.filter((word) => {
  word.length > 10 && console.log(word);
});

// filters out the word very from the array
storyWords = storyWords.filter((word) => {
  return word !== 'very';
});

// changed the word from GW to George Washington
storyWords = storyWords.map((word) => {
  return word === 'GW' ? 'George Washington' : word;
});

console.log(storyWords.join(' '));