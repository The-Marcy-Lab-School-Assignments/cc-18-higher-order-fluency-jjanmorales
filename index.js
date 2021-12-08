//write your code here
const animals = ['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']

const shortWords = words => words.filter(word => word.length < 5);
console.log(shortWords(animals));

const noVowel = words => words.map(word => word.replace(/[aeiou]/gi, "x"));
console.log(noVowel(animals));

const longToShort = words => words.sort((a,b) => b.length - a.length);
console.log(longToShort(animals));

const onlyVowelA = words => words.filter(word=> word.includes("a"));
console.log(onlyVowelA(animals));

const pluralize = words => words.map(word=> word + "s");
console.log(pluralize(animals));

const longerThanSeven = words => words.some(word=> word.length > 7);
console.log(longerThanSeven(animals));

const oddLength = words => words.filter(word=> word.length % 2 !== 0);
console.log(oddLength(animals));

const allFour = words => words.every(word=> word.length === 4);
console.log(allFour(animals));

const sum = words => words.reduce((a,b) => a + b);
console.log(sum([22, 15, 1114, 416, 37, 4]));

const longWords = words => words.filter(word => word.length > 3);
console.log(longWords(animals));

const upperCase = words => words.map(word => word[0].toUpperCase() + word.substr(1, word.length));
console.log(upperCase(animals));

const concatStrings = words => words.join(" ");
console.log(concatStrings(animals));